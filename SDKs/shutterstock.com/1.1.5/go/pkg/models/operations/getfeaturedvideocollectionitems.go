package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedVideoCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFeaturedVideoCollectionItemsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetFeaturedVideoCollectionItemsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedVideoCollectionItemsRequest struct {
	PathParams  GetFeaturedVideoCollectionItemsPathParams
	QueryParams GetFeaturedVideoCollectionItemsQueryParams
	Security    GetFeaturedVideoCollectionItemsSecurity
}

type GetFeaturedVideoCollectionItemsResponse struct {
	ContentType                 string
	StatusCode                  int64
	VideoCollectionItemDataList *interface{}
}
