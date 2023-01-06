package operations

import (
	"openapi/pkg/models/shared"
)

type GetProgressPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProgressQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type GetProgressRequest struct {
	PathParams  GetProgressPathParams
	QueryParams GetProgressQueryParams
}

type GetProgressResponse struct {
	ContentType string
	Error       *shared.Error
	Progress    *shared.Progress
	StatusCode  int64
}
