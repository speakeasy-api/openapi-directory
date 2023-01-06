package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceObjectPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstanceObjectQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetInstanceObjectRequest struct {
	PathParams  GetInstanceObjectPathParams
	QueryParams GetInstanceObjectQueryParams
}

type GetInstanceObjectResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
