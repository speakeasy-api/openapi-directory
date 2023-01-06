package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetProfileRequest struct {
	QueryParams GetProfileQueryParams
}

type GetProfileResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
