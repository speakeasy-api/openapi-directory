package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteVideoCollectionItemsQueryParams struct {
	ItemID []string `queryParam:"style=form,explode=true,name=item_id"`
}

type DeleteVideoCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteVideoCollectionItemsRequest struct {
	PathParams  DeleteVideoCollectionItemsPathParams
	QueryParams DeleteVideoCollectionItemsQueryParams
	Security    DeleteVideoCollectionItemsSecurity
}

type DeleteVideoCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
