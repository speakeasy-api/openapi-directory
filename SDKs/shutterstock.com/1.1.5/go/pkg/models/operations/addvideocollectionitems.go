package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddVideoCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type AddVideoCollectionItemsRequest struct {
	PathParams AddVideoCollectionItemsPathParams
	Request    shared.CollectionItemRequest `request:"mediaType=application/json"`
	Security   AddVideoCollectionItemsSecurity
}

type AddVideoCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
