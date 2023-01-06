package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type PortfolioConstruction struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPortfolioConstruction(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PortfolioConstruction {
	return &PortfolioConstruction{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostPortfolioConstructionInvestable - Investable Portfolio
// Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
// * The desired assets weights
// * The desired assets groups weights
// * The desired maximum assets groups weights
// * The prices of the assets
// * The portfolio value
// * The requirement to purchase some assets by round lots or by odd lots
// * The possibility to purchase some assets by a fractional quantity of shares
// * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
//
// References
// * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
func (s *PortfolioConstruction) PostPortfolioConstructionInvestable(ctx context.Context, request operations.PostPortfolioConstructionInvestableRequest) (*operations.PostPortfolioConstructionInvestableResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/investable"

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

	res := &operations.PostPortfolioConstructionInvestableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionInvestable200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionInvestable200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioConstructionMimicking - Mimicking Portfolio
// Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
// * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
func (s *PortfolioConstruction) PostPortfolioConstructionMimicking(ctx context.Context, request operations.PostPortfolioConstructionMimickingRequest) (*operations.PostPortfolioConstructionMimickingResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/mimicking"

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

	res := &operations.PostPortfolioConstructionMimickingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionMimicking200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionMimicking200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioConstructionRandom - Random Portfolio
// Construct one or several random portfolio(s), optionally subject to:
// * Minimum and maximum weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
//
// References
// * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
func (s *PortfolioConstruction) PostPortfolioConstructionRandom(ctx context.Context, request operations.PostPortfolioConstructionRandomRequest) (*operations.PostPortfolioConstructionRandomResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/random"

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

	res := &operations.PostPortfolioConstructionRandomResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionRandom200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionRandom200ApplicationJSONObject = out
		}
	}

	return res, nil
}
