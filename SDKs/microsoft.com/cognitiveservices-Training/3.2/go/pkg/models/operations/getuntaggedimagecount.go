package operations

import (
	"openapi/pkg/models/shared"
)

type GetUntaggedImageCountPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetUntaggedImageCountQueryParams struct {
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetUntaggedImageCountRequest struct {
	PathParams  GetUntaggedImageCountPathParams
	QueryParams GetUntaggedImageCountQueryParams
}

type GetUntaggedImageCountResponse struct {
	Body                                                []byte
	ContentType                                         string
	CustomVisionError                                   *shared.CustomVisionError
	GetUntaggedImageCount200ApplicationJSONInt32Integer *int32
	StatusCode                                          int64
}
