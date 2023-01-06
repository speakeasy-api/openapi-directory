package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePerformanceCountPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetImagePerformanceCountQueryParams struct {
	TagIds []string `queryParam:"style=form,explode=false,name=tagIds"`
}

type GetImagePerformanceCountRequest struct {
	PathParams  GetImagePerformanceCountPathParams
	QueryParams GetImagePerformanceCountQueryParams
}

type GetImagePerformanceCountResponse struct {
	Body                                                   []byte
	ContentType                                            string
	CustomVisionError                                      *shared.CustomVisionError
	GetImagePerformanceCount200ApplicationJSONInt32Integer *int32
	StatusCode                                             int64
}
