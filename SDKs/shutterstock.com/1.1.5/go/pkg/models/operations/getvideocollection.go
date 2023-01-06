package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoCollectionEmbedEnum string

const (
	GetVideoCollectionEmbedEnumShareCode GetVideoCollectionEmbedEnum = "share_code"
	GetVideoCollectionEmbedEnumShareURL  GetVideoCollectionEmbedEnum = "share_url"
)

type GetVideoCollectionQueryParams struct {
	Embed     []GetVideoCollectionEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	ShareCode *string                       `queryParam:"style=form,explode=true,name=share_code"`
}

type GetVideoCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoCollectionRequest struct {
	PathParams  GetVideoCollectionPathParams
	QueryParams GetVideoCollectionQueryParams
	Security    GetVideoCollectionSecurity
}

type GetVideoCollectionResponse struct {
	Collection  *shared.Collection
	ContentType string
	StatusCode  int64
}
