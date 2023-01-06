package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedVideoCollectionListEmbedEnum string

const (
	GetFeaturedVideoCollectionListEmbedEnumShareURL GetFeaturedVideoCollectionListEmbedEnum = "share_url"
)

type GetFeaturedVideoCollectionListQueryParams struct {
	Embed *GetFeaturedVideoCollectionListEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
}

type GetFeaturedVideoCollectionListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedVideoCollectionListRequest struct {
	QueryParams GetFeaturedVideoCollectionListQueryParams
	Security    GetFeaturedVideoCollectionListSecurity
}

type GetFeaturedVideoCollectionListResponse struct {
	ContentType                string
	FeaturedCollectionDataList *interface{}
	StatusCode                 int64
}
