package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTrackCollectionItemsSortEnum string

const (
	GetTrackCollectionItemsSortEnumNewest GetTrackCollectionItemsSortEnum = "newest"
	GetTrackCollectionItemsSortEnumOldest GetTrackCollectionItemsSortEnum = "oldest"
)

type GetTrackCollectionItemsQueryParams struct {
	Page      *int64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                           `queryParam:"style=form,explode=true,name=per_page"`
	ShareCode *string                          `queryParam:"style=form,explode=true,name=share_code"`
	Sort      *GetTrackCollectionItemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetTrackCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackCollectionItemsRequest struct {
	PathParams  GetTrackCollectionItemsPathParams
	QueryParams GetTrackCollectionItemsQueryParams
	Security    GetTrackCollectionItemsSecurity
}

type GetTrackCollectionItemsResponse struct {
	CollectionItemDataList *interface{}
	ContentType            string
	StatusCode             int64
}
