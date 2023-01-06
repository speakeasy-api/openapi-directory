package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type PortfolioAnalysis struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPortfolioAnalysis(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PortfolioAnalysis {
	return &PortfolioAnalysis{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostPortfolioAnalysisAlpha - Alpha
// Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *PortfolioAnalysis) PostPortfolioAnalysisAlpha(ctx context.Context, request operations.PostPortfolioAnalysisAlphaRequest) (*operations.PostPortfolioAnalysisAlphaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/alpha"

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

	res := &operations.PostPortfolioAnalysisAlphaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisAlpha200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisAlpha200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisBeta - Beta
// Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *PortfolioAnalysis) PostPortfolioAnalysisBeta(ctx context.Context, request operations.PostPortfolioAnalysisBetaRequest) (*operations.PostPortfolioAnalysisBetaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/beta"

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

	res := &operations.PostPortfolioAnalysisBetaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisBeta200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisBeta200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisContributionsReturn - Return Contributions
// Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *PortfolioAnalysis) PostPortfolioAnalysisContributionsReturn(ctx context.Context, request operations.PostPortfolioAnalysisContributionsReturnRequest) (*operations.PostPortfolioAnalysisContributionsReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/contributions/return"

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

	res := &operations.PostPortfolioAnalysisContributionsReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisContributionsReturn200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisContributionsReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisContributionsRisk - Risk Contributions
// Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *PortfolioAnalysis) PostPortfolioAnalysisContributionsRisk(ctx context.Context, request operations.PostPortfolioAnalysisContributionsRiskRequest) (*operations.PostPortfolioAnalysisContributionsRiskResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/contributions/risk"

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

	res := &operations.PostPortfolioAnalysisContributionsRiskResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisContributionsRisk200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisContributionsRisk200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisDiversificationRatio - Diversification Ratio
// Compute the diversification ratio of one or several portfolio(s).
//
// References
// * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
func (s *PortfolioAnalysis) PostPortfolioAnalysisDiversificationRatio(ctx context.Context, request operations.PostPortfolioAnalysisDiversificationRatioRequest) (*operations.PostPortfolioAnalysisDiversificationRatioResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/diversification-ratio"

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

	res := &operations.PostPortfolioAnalysisDiversificationRatioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisDiversificationRatio200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisDrawdowns - Drawdowns
// Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
//
// References
// * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
func (s *PortfolioAnalysis) PostPortfolioAnalysisDrawdowns(ctx context.Context, request operations.PostPortfolioAnalysisDrawdownsRequest) (*operations.PostPortfolioAnalysisDrawdownsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/drawdowns"

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

	res := &operations.PostPortfolioAnalysisDrawdownsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisDrawdowns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisDrawdowns200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisFactorExposures - Factor Exposures
// Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
//
// References
// * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
func (s *PortfolioAnalysis) PostPortfolioAnalysisFactorExposures(ctx context.Context, request operations.PostPortfolioAnalysisFactorExposuresRequest) (*operations.PostPortfolioAnalysisFactorExposuresResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/factor/exposures"

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

	res := &operations.PostPortfolioAnalysisFactorExposuresResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisFactorExposures200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisFactorExposures200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisMeanVarianceEfficientFrontier - Mean-Variance Efficient Frontier
// Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraint
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *PortfolioAnalysis) PostPortfolioAnalysisMeanVarianceEfficientFrontier(ctx context.Context, request operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest) (*operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/mean-variance/efficient-frontier"

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

	res := &operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier - Mean-Variance Minimum Variance Frontier
// Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraint
//
// > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *PortfolioAnalysis) PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(ctx context.Context, request operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest) (*operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/mean-variance/minimum-variance-frontier"

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

	res := &operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisReturn - Arithmetic Return
// Compute the arithmetic return of one or several portfolio(s) from either:
// * Portfolio assets arithmetic returns
// * Portfolio values
//
// References
// * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *PortfolioAnalysis) PostPortfolioAnalysisReturn(ctx context.Context, request operations.PostPortfolioAnalysisReturnRequest) (*operations.PostPortfolioAnalysisReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/return"

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

	res := &operations.PostPortfolioAnalysisReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisReturn200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisReturnsAverage - Arithmetic Average Return
// Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
//
// References
// * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
func (s *PortfolioAnalysis) PostPortfolioAnalysisReturnsAverage(ctx context.Context, request operations.PostPortfolioAnalysisReturnsAverageRequest) (*operations.PostPortfolioAnalysisReturnsAverageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/returns/average"

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

	res := &operations.PostPortfolioAnalysisReturnsAverageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisReturnsAverage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisReturnsAverage200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisSharpeRatio - Sharpe Ratio
// Compute the Sharpe ratio of one or several portfolio(s) from either:
// * Portfolio assets arithmetic returns and assets covariance matrix
// * Portfolio values
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *PortfolioAnalysis) PostPortfolioAnalysisSharpeRatio(ctx context.Context, request operations.PostPortfolioAnalysisSharpeRatioRequest) (*operations.PostPortfolioAnalysisSharpeRatioResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/sharpe-ratio"

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

	res := &operations.PostPortfolioAnalysisSharpeRatioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisSharpeRatio200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisSharpeRatio200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisTrackingError - Tracking Error
// Compute the tracking error between a benchmark and one or several portfolio(s).
//
// References
// * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *PortfolioAnalysis) PostPortfolioAnalysisTrackingError(ctx context.Context, request operations.PostPortfolioAnalysisTrackingErrorRequest) (*operations.PostPortfolioAnalysisTrackingErrorResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/tracking-error"

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

	res := &operations.PostPortfolioAnalysisTrackingErrorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisTrackingError200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisTrackingError200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisVolatility - Volatility
// Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:
// * Portfolio assets covariance matrix
// * Portfolio values
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *PortfolioAnalysis) PostPortfolioAnalysisVolatility(ctx context.Context, request operations.PostPortfolioAnalysisVolatilityRequest) (*operations.PostPortfolioAnalysisVolatilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/volatility"

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

	res := &operations.PostPortfolioAnalysisVolatilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisVolatility200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisVolatility200ApplicationJSONObject = out
		}
	}

	return res, nil
}
