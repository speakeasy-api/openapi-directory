package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetImageCollectionItemsSortEnum string

const (
	GetImageCollectionItemsSortEnumNewest GetImageCollectionItemsSortEnum = "newest"
	GetImageCollectionItemsSortEnumOldest GetImageCollectionItemsSortEnum = "oldest"
)

type GetImageCollectionItemsQueryParams struct {
	Page      *int64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                           `queryParam:"style=form,explode=true,name=per_page"`
	ShareCode *string                          `queryParam:"style=form,explode=true,name=share_code"`
	Sort      *GetImageCollectionItemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetImageCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageCollectionItemsRequest struct {
	PathParams  GetImageCollectionItemsPathParams
	QueryParams GetImageCollectionItemsQueryParams
	Security    GetImageCollectionItemsSecurity
}

type GetImageCollectionItemsResponse struct {
	CollectionItemDataList *interface{}
	ContentType            string
	StatusCode             int64
}
