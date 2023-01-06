package operations

import (
	"openapi/pkg/models/shared"
)

type SuggestTagsAndRegionsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type SuggestTagsAndRegionsQueryParams struct {
	ImageIds    []string `queryParam:"style=form,explode=false,name=imageIds"`
	IterationID string   `queryParam:"style=form,explode=true,name=iterationId"`
}

type SuggestTagsAndRegionsRequest struct {
	PathParams  SuggestTagsAndRegionsPathParams
	QueryParams SuggestTagsAndRegionsQueryParams
}

type SuggestTagsAndRegionsResponse struct {
	Body                   []byte
	ContentType            string
	CustomVisionError      *shared.CustomVisionError
	StatusCode             int64
	SuggestedTagAndRegions []shared.SuggestedTagAndRegion
}
