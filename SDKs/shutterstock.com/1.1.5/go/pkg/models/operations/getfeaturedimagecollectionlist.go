package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedImageCollectionListAssetHintEnum string

const (
	GetFeaturedImageCollectionListAssetHintEnumOnex GetFeaturedImageCollectionListAssetHintEnum = "1x"
	GetFeaturedImageCollectionListAssetHintEnumTwox GetFeaturedImageCollectionListAssetHintEnum = "2x"
)

type GetFeaturedImageCollectionListEmbedEnum string

const (
	GetFeaturedImageCollectionListEmbedEnumShareURL GetFeaturedImageCollectionListEmbedEnum = "share_url"
)

type GetFeaturedImageCollectionListTypeEnum string

const (
	GetFeaturedImageCollectionListTypeEnumPhoto     GetFeaturedImageCollectionListTypeEnum = "photo"
	GetFeaturedImageCollectionListTypeEnumEditorial GetFeaturedImageCollectionListTypeEnum = "editorial"
	GetFeaturedImageCollectionListTypeEnumVector    GetFeaturedImageCollectionListTypeEnum = "vector"
)

type GetFeaturedImageCollectionListQueryParams struct {
	AssetHint *GetFeaturedImageCollectionListAssetHintEnum `queryParam:"style=form,explode=true,name=asset_hint"`
	Embed     *GetFeaturedImageCollectionListEmbedEnum     `queryParam:"style=form,explode=true,name=embed"`
	Type      []GetFeaturedImageCollectionListTypeEnum     `queryParam:"style=form,explode=true,name=type"`
}

type GetFeaturedImageCollectionListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedImageCollectionListRequest struct {
	QueryParams GetFeaturedImageCollectionListQueryParams
	Security    GetFeaturedImageCollectionListSecurity
}

type GetFeaturedImageCollectionListResponse struct {
	ContentType                string
	FeaturedCollectionDataList *interface{}
	StatusCode                 int64
}
