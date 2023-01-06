package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetImageCollectionEmbedEnum string

const (
	GetImageCollectionEmbedEnumShareCode GetImageCollectionEmbedEnum = "share_code"
	GetImageCollectionEmbedEnumShareURL  GetImageCollectionEmbedEnum = "share_url"
)

type GetImageCollectionQueryParams struct {
	Embed     []GetImageCollectionEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	ShareCode *string                       `queryParam:"style=form,explode=true,name=share_code"`
}

type GetImageCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageCollectionRequest struct {
	PathParams  GetImageCollectionPathParams
	QueryParams GetImageCollectionQueryParams
	Security    GetImageCollectionSecurity
}

type GetImageCollectionResponse struct {
	Collection  *shared.Collection
	ContentType string
	StatusCode  int64
}
