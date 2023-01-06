package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type GetTagQueryParams struct {
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetTagRequest struct {
	PathParams  GetTagPathParams
	QueryParams GetTagQueryParams
}

type GetTagResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	StatusCode        int64
	Tag               *shared.Tag
}
