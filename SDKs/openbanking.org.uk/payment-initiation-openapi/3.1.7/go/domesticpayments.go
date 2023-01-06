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

type DomesticPayments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDomesticPayments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DomesticPayments {
	return &DomesticPayments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateDomesticPaymentConsents - Create Domestic Payment Consents
func (s *DomesticPayments) CreateDomesticPaymentConsents(ctx context.Context, request operations.CreateDomesticPaymentConsentsRequest) (*operations.CreateDomesticPaymentConsentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/domestic-payment-consents"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDomesticPaymentConsentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObWriteDomesticConsentResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticConsentResponse5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWriteDomesticConsentResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticConsentResponse5 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 415:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// CreateDomesticPayments - Create Domestic Payments
func (s *DomesticPayments) CreateDomesticPayments(ctx context.Context, request operations.CreateDomesticPaymentsRequest) (*operations.CreateDomesticPaymentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/domestic-payments"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDomesticPaymentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObWriteDomesticResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticResponse5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWriteDomesticResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticResponse5 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 415:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// GetDomesticPaymentConsentsConsentID - Get Domestic Payment Consents
func (s *DomesticPayments) GetDomesticPaymentConsentsConsentID(ctx context.Context, request operations.GetDomesticPaymentConsentsConsentIDRequest) (*operations.GetDomesticPaymentConsentsConsentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-payment-consents/{ConsentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDomesticPaymentConsentsConsentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObWriteDomesticConsentResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticConsentResponse5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWriteDomesticConsentResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticConsentResponse5 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// GetDomesticPaymentConsentsConsentIDFundsConfirmation - Get Domestic Payment Consents Funds Confirmation
func (s *DomesticPayments) GetDomesticPaymentConsentsConsentIDFundsConfirmation(ctx context.Context, request operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationRequest) (*operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-payment-consents/{ConsentId}/funds-confirmation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObWriteFundsConfirmationResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteFundsConfirmationResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWriteFundsConfirmationResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteFundsConfirmationResponse1 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// GetDomesticPaymentsDomesticPaymentID - Get Domestic Payments
func (s *DomesticPayments) GetDomesticPaymentsDomesticPaymentID(ctx context.Context, request operations.GetDomesticPaymentsDomesticPaymentIDRequest) (*operations.GetDomesticPaymentsDomesticPaymentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-payments/{DomesticPaymentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDomesticPaymentsDomesticPaymentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObWriteDomesticResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticResponse5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWriteDomesticResponse5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWriteDomesticResponse5 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}
