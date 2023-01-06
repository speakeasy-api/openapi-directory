package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedImageCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFeaturedImageCollectionAssetHintEnum string

const (
	GetFeaturedImageCollectionAssetHintEnumOnex GetFeaturedImageCollectionAssetHintEnum = "1x"
	GetFeaturedImageCollectionAssetHintEnumTwox GetFeaturedImageCollectionAssetHintEnum = "2x"
)

type GetFeaturedImageCollectionEmbedEnum string

const (
	GetFeaturedImageCollectionEmbedEnumShareURL GetFeaturedImageCollectionEmbedEnum = "share_url"
)

type GetFeaturedImageCollectionQueryParams struct {
	AssetHint *GetFeaturedImageCollectionAssetHintEnum `queryParam:"style=form,explode=true,name=asset_hint"`
	Embed     *GetFeaturedImageCollectionEmbedEnum     `queryParam:"style=form,explode=true,name=embed"`
}

type GetFeaturedImageCollectionSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedImageCollectionRequest struct {
	PathParams  GetFeaturedImageCollectionPathParams
	QueryParams GetFeaturedImageCollectionQueryParams
	Security    GetFeaturedImageCollectionSecurity
}

type GetFeaturedImageCollectionResponse struct {
	ContentType        string
	FeaturedCollection *shared.FeaturedCollection
	StatusCode         int64
}
