package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Behavior struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBehavior(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Behavior {
	return &Behavior{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ReportBehavior - Report Behavior
// Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.
//
// ### Reasons to report a person
//
// <table>
//
//	<tr>
//	  <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
//	  <td>Rape, Drug Dealing, Sexual Harassment</td>
//	</tr>
//	<tr>
//	  <td><center><b>High</b><br>(Score: 0.8)</td>
//	  <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
//	</tr>
//	<tr>
//	  <td><center><b>Medium</b><br>(Score: 0.6)</td>
//	  <td>Absences</td>
//	</tr>
//	<tr>
//	  <td><center><b>Low</b><br>(Score: 0.4)</td>
//	  <td>Tardiness, Confidentiality Breach</td>
//	</tr>
//	<tr>
//	  <td><center><b>None</b><br>(Score: 0)</td>
//	  <td>Good Reputation</td>
//	</tr>
//	<tr>
//	  <td><center><b>Unknown</b></td>
//	  <td>No information</td>
//	</tr>
//
// </table>
//
// **NOTE:** If the reason of your report is not here, please contact Truora support team.
func (s *Behavior) ReportBehavior(ctx context.Context, request operations.ReportBehaviorRequest) (*operations.ReportBehaviorResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/behavior"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReportBehaviorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BehaviourOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BehaviourOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Errors = out
		}
	}

	return res, nil
}
