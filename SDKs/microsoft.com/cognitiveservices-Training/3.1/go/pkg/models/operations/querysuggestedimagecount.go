package operations

import (
	"openapi/pkg/models/shared"
)

type QuerySuggestedImageCountPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type QuerySuggestedImageCountQueryParams struct {
	IterationID string `queryParam:"style=form,explode=true,name=iterationId"`
}

type QuerySuggestedImageCountHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type QuerySuggestedImageCountRequests struct {
	ApplicationXML []byte            `request:"mediaType=application/xml"`
	TagFilter      *shared.TagFilter `request:"mediaType=application/json"`
	TagFilter1     *shared.TagFilter `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte            `request:"mediaType=text/xml"`
}

type QuerySuggestedImageCountRequest struct {
	PathParams  QuerySuggestedImageCountPathParams
	QueryParams QuerySuggestedImageCountQueryParams
	Headers     QuerySuggestedImageCountHeaders
	Request     QuerySuggestedImageCountRequests
}

type QuerySuggestedImageCountResponse struct {
	Body                                             []byte
	ContentType                                      string
	CustomVisionError                                *shared.CustomVisionError
	QuerySuggestedImageCount200ApplicationJSONObject map[string]int32
	StatusCode                                       int64
}
