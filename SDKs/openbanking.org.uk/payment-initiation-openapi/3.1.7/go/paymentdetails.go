package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type PaymentDetails struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPaymentDetails(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PaymentDetails {
	return &PaymentDetails{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDomesticPaymentsDomesticPaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetDomesticPaymentsDomesticPaymentIDPaymentDetails(ctx context.Context, request operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsRequest) (*operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-payments/{DomesticPaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails(ctx context.Context, request operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsRequest) (*operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails(ctx context.Context, request operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsRequest) (*operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/domestic-standing-orders/{DomesticStandingOrderId}/payment-details", request.PathParams)

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

	res := &operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetFilePaymentsFilePaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetFilePaymentsFilePaymentIDPaymentDetails(ctx context.Context, request operations.GetFilePaymentsFilePaymentIDPaymentDetailsRequest) (*operations.GetFilePaymentsFilePaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/file-payments/{FilePaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetFilePaymentsFilePaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetInternationalPaymentsInternationalPaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetInternationalPaymentsInternationalPaymentIDPaymentDetails(ctx context.Context, request operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsRequest) (*operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/international-payments/{InternationalPaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails(ctx context.Context, request operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsRequest) (*operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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

// GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails - Get Payment Details
func (s *PaymentDetails) GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails(ctx context.Context, request operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsRequest) (*operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details", request.PathParams)

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

	res := &operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsResponse{
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
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObWritePaymentDetailsResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBWritePaymentDetailsResponse1 = out
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
	case httpRes.StatusCode == 404:
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
