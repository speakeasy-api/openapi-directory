package operations

import (
	"openapi/pkg/models/shared"
)

type QuerySuggestedImagesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type QuerySuggestedImagesQueryParams struct {
	IterationID string `queryParam:"style=form,explode=true,name=iterationId"`
}

type QuerySuggestedImagesHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type QuerySuggestedImagesRequests struct {
	ApplicationXML                   []byte                                  `request:"mediaType=application/xml"`
	SuggestedTagAndRegionQueryToken  *shared.SuggestedTagAndRegionQueryToken `request:"mediaType=application/json"`
	SuggestedTagAndRegionQueryToken1 *shared.SuggestedTagAndRegionQueryToken `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML                          []byte                                  `request:"mediaType=text/xml"`
}

type QuerySuggestedImagesRequest struct {
	PathParams  QuerySuggestedImagesPathParams
	QueryParams QuerySuggestedImagesQueryParams
	Headers     QuerySuggestedImagesHeaders
	Request     QuerySuggestedImagesRequests
}

type QuerySuggestedImagesResponse struct {
	Body                       []byte
	ContentType                string
	CustomVisionError          *shared.CustomVisionError
	StatusCode                 int64
	SuggestedTagAndRegionQuery *shared.SuggestedTagAndRegionQuery
}
