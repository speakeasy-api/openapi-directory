package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Statistics struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewStatistics(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Statistics {
	return &Statistics{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetTargetsAllAverageFixTime - Average fix time graph data (all targets)
func (s *Statistics) GetTargetsAllAverageFixTime(ctx context.Context) (*operations.GetTargetsAllAverageFixTimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/average_fix_time/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllAverageFixTimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsAllAverageFixTime200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllAverageFixTime200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsAllNeedsAttentionPie - Targets with open vulnerabilities pie chart data
func (s *Statistics) GetTargetsAllNeedsAttentionPie(ctx context.Context) (*operations.GetTargetsAllNeedsAttentionPieResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/needs_attention_pie/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllNeedsAttentionPieResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsAllNeedsAttentionPie200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllNeedsAttentionPie200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsAllNeedsAttentionTop - Targets with open vulnerabilities
func (s *Statistics) GetTargetsAllNeedsAttentionTop(ctx context.Context) (*operations.GetTargetsAllNeedsAttentionTopResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/needs_attention_top/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllNeedsAttentionTopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetTargetsAllNeedsAttentionTop200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllNeedsAttentionTop200ApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetTargetsAllRiskTrend - Risk trend graph data (all targets)
func (s *Statistics) GetTargetsAllRiskTrend(ctx context.Context) (*operations.GetTargetsAllRiskTrendResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/risk_trend/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllRiskTrendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetTargetsAllRiskTrend200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllRiskTrend200ApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetTargetsAllSeverityTrend - Severity trend graph data (all targets)
func (s *Statistics) GetTargetsAllSeverityTrend(ctx context.Context) (*operations.GetTargetsAllSeverityTrendResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/severity_trend/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllSeverityTrendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsAllSeverityTrend200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllSeverityTrend200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsAllTopVulns - Top 5 vulnerabilities (all targets).
func (s *Statistics) GetTargetsAllTopVulns(ctx context.Context) (*operations.GetTargetsAllTopVulnsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/targets/all/top_vulns/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsAllTopVulnsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetTargetsAllTopVulns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsAllTopVulns200ApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDAverageFixTime - Average vulnerability trend graph data
func (s *Statistics) GetTargetsTargetIDAverageFixTime(ctx context.Context, request operations.GetTargetsTargetIDAverageFixTimeRequest) (*operations.GetTargetsTargetIDAverageFixTimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/average_fix_time/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsTargetIDAverageFixTimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDAverageFixTime200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDAverageFixTime200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDRiskTrend - Risk trend graph data
func (s *Statistics) GetTargetsTargetIDRiskTrend(ctx context.Context, request operations.GetTargetsTargetIDRiskTrendRequest) (*operations.GetTargetsTargetIDRiskTrendResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/risk_trend/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsTargetIDRiskTrendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetTargetsTargetIDRiskTrend200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDRiskTrend200ApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDSeverityTrend - Severity trend graph data.
func (s *Statistics) GetTargetsTargetIDSeverityTrend(ctx context.Context, request operations.GetTargetsTargetIDSeverityTrendRequest) (*operations.GetTargetsTargetIDSeverityTrendResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/severity_trend/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsTargetIDSeverityTrendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDSeverityTrend200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDSeverityTrend200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDTopVulns - Top 5 vulnerabilities
func (s *Statistics) GetTargetsTargetIDTopVulns(ctx context.Context, request operations.GetTargetsTargetIDTopVulnsRequest) (*operations.GetTargetsTargetIDTopVulnsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/top_vulns/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTargetsTargetIDTopVulnsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetTargetsTargetIDTopVulns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDTopVulns200ApplicationJSONObjects = out
		}
	}

	return res, nil
}
