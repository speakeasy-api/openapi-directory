package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type BioentitysetSlimmer struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBioentitysetSlimmer(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BioentitysetSlimmer {
	return &BioentitysetSlimmer{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetEntitySetAnatomySlimmer - For a given gene(s), summarize its annotations over a defined set of slim
func (s *BioentitysetSlimmer) GetEntitySetAnatomySlimmer(ctx context.Context, request operations.GetEntitySetAnatomySlimmerRequest) (*operations.GetEntitySetAnatomySlimmerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bioentityset/slimmer/anatomy"

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

	res := &operations.GetEntitySetAnatomySlimmerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetEntitySetFunctionSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
func (s *BioentitysetSlimmer) GetEntitySetFunctionSlimmer(ctx context.Context, request operations.GetEntitySetFunctionSlimmerRequest) (*operations.GetEntitySetFunctionSlimmerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bioentityset/slimmer/function"

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

	res := &operations.GetEntitySetFunctionSlimmerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetEntitySetPhenotypeSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
func (s *BioentitysetSlimmer) GetEntitySetPhenotypeSlimmer(ctx context.Context, request operations.GetEntitySetPhenotypeSlimmerRequest) (*operations.GetEntitySetPhenotypeSlimmerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bioentityset/slimmer/phenotype"

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

	res := &operations.GetEntitySetPhenotypeSlimmerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
