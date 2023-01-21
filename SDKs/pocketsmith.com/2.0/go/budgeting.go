package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Budgeting struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBudgeting(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Budgeting {
	return &Budgeting{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetUsersIDBudget - List budget for user
// Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
func (s *Budgeting) GetUsersIDBudget(ctx context.Context, request operations.GetUsersIDBudgetRequest) (*operations.GetUsersIDBudgetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/budget", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDBudgetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.BudgetAnalysisPackage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BudgetAnalysisPackages = out
		}
	}

	return res, nil
}

// GetUsersIDBudgetSummary - Get budget summary for user
// Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
func (s *Budgeting) GetUsersIDBudgetSummary(ctx context.Context, request operations.GetUsersIDBudgetSummaryRequest) (*operations.GetUsersIDBudgetSummaryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/budget_summary", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDBudgetSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.BudgetAnalysisPackage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BudgetAnalysisPackages = out
		}
	}

	return res, nil
}

// GetUsersIDTrendAnalysis - Get trend analysis for user
// Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
func (s *Budgeting) GetUsersIDTrendAnalysis(ctx context.Context, request operations.GetUsersIDTrendAnalysisRequest) (*operations.GetUsersIDTrendAnalysisResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}/trend_analysis", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersIDTrendAnalysisResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.BudgetAnalysisPackage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BudgetAnalysisPackages = out
		}
	}

	return res, nil
}
