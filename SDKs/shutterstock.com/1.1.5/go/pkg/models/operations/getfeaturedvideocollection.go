package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedVideoCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFeaturedVideoCollectionEmbedEnum string

const (
	GetFeaturedVideoCollectionEmbedEnumShareURL GetFeaturedVideoCollectionEmbedEnum = "share_url"
)

type GetFeaturedVideoCollectionQueryParams struct {
	Embed *GetFeaturedVideoCollectionEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
}

type GetFeaturedVideoCollectionSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedVideoCollectionRequest struct {
	PathParams  GetFeaturedVideoCollectionPathParams
	QueryParams GetFeaturedVideoCollectionQueryParams
	Security    GetFeaturedVideoCollectionSecurity
}

type GetFeaturedVideoCollectionResponse struct {
	ContentType        string
	FeaturedCollection *shared.FeaturedCollection
	StatusCode         int64
}
