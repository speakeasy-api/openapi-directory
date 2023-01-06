package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Factors struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFactors(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Factors {
	return &Factors{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostFactorsResidualization - Residualization
// Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.
//
// References
// * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
// * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)
func (s *Factors) PostFactorsResidualization(ctx context.Context, request operations.PostFactorsResidualizationRequest) (*operations.PostFactorsResidualizationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/factors/residualization"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFactorsResidualizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFactorsResidualization200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostFactorsResidualization200ApplicationJSONObject = out
		}
	}

	return res, nil
}
