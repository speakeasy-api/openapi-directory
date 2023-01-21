package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Services struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Services {
	return &Services{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/consumerQuotaMetrics:importProducerOverrides", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet - Retrieves a summary of quota information for a specific quota limit.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.V1Beta1ConsumerQuotaLimit
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.V1Beta1ConsumerQuotaLimit = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/producerOverrides", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete - Deletes a producer override.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList - Lists all producer overrides on this limit.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/producerOverrides", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.V1Beta1ListProducerOverridesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.V1Beta1ListProducerOverridesResponse = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch - Updates a producer override.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// ServiceconsumermanagementServicesConsumerQuotaMetricsList - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
func (s *Services) ServiceconsumermanagementServicesConsumerQuotaMetricsList(ctx context.Context, request operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest) (*operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/consumerQuotaMetrics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.V1Beta1ListConsumerQuotaMetricsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.V1Beta1ListConsumerQuotaMetricsResponse = out
		}
	}

	return res, nil
}
