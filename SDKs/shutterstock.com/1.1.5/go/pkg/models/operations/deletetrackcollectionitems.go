package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrackCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTrackCollectionItemsQueryParams struct {
	ItemID []string `queryParam:"style=form,explode=true,name=item_id"`
}

type DeleteTrackCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteTrackCollectionItemsRequest struct {
	PathParams  DeleteTrackCollectionItemsPathParams
	QueryParams DeleteTrackCollectionItemsQueryParams
	Security    DeleteTrackCollectionItemsSecurity
}

type DeleteTrackCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
