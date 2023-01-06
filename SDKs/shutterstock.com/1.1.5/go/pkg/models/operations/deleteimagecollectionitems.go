package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteImageCollectionItemsQueryParams struct {
	ItemID []string `queryParam:"style=form,explode=true,name=item_id"`
}

type DeleteImageCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteImageCollectionItemsRequest struct {
	PathParams  DeleteImageCollectionItemsPathParams
	QueryParams DeleteImageCollectionItemsQueryParams
	Security    DeleteImageCollectionItemsSecurity
}

type DeleteImageCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
