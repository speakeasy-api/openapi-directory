package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type VirtualMeterCalculateFormula struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVirtualMeterCalculateFormula(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *VirtualMeterCalculateFormula {
	return &VirtualMeterCalculateFormula{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// VirtualMeterCalculateFormulaGet - Calculates a virtual meter from a formula.
//
//	A meter is coded as ID("METERID")
//
// Calculates a virtual meter from a formula.
//
//	A meter is coded as ID("METERID")
//	Ariphmetical operators:
//	 ()  parentheses;
//	 +   plus (a + b);
//	 -  minus (a - b);
//	 *  multiplycation symbol (a * b);
//	 /  divide symbol (a / b);
//	Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2
func (s *VirtualMeterCalculateFormula) VirtualMeterCalculateFormulaGet(ctx context.Context, request operations.VirtualMeterCalculateFormulaGetRequest) (*operations.VirtualMeterCalculateFormulaGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/VirtualMeterCalculateFormula"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.VirtualMeterCalculateFormulaGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Device
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Device = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.Device
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Device = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
