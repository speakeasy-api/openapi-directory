package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturedImageCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFeaturedImageCollectionItemsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetFeaturedImageCollectionItemsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetFeaturedImageCollectionItemsRequest struct {
	PathParams  GetFeaturedImageCollectionItemsPathParams
	QueryParams GetFeaturedImageCollectionItemsQueryParams
	Security    GetFeaturedImageCollectionItemsSecurity
}

type GetFeaturedImageCollectionItemsResponse struct {
	CollectionItemDataList *interface{}
	ContentType            string
	StatusCode             int64
}
