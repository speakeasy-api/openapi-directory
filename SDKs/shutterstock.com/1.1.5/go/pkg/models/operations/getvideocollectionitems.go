package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoCollectionItemsSortEnum string

const (
	GetVideoCollectionItemsSortEnumNewest GetVideoCollectionItemsSortEnum = "newest"
	GetVideoCollectionItemsSortEnumOldest GetVideoCollectionItemsSortEnum = "oldest"
)

type GetVideoCollectionItemsQueryParams struct {
	Page      *int64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                           `queryParam:"style=form,explode=true,name=per_page"`
	ShareCode *string                          `queryParam:"style=form,explode=true,name=share_code"`
	Sort      *GetVideoCollectionItemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetVideoCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoCollectionItemsRequest struct {
	PathParams  GetVideoCollectionItemsPathParams
	QueryParams GetVideoCollectionItemsQueryParams
	Security    GetVideoCollectionItemsSecurity
}

type GetVideoCollectionItemsResponse struct {
	CollectionItemDataList *interface{}
	ContentType            string
	StatusCode             int64
}
