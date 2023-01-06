package operations

import (
	"openapi/pkg/models/shared"
)

type AddImageCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddImageCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type AddImageCollectionItemsRequest struct {
	PathParams AddImageCollectionItemsPathParams
	Request    shared.CollectionItemRequest `request:"mediaType=application/json"`
	Security   AddImageCollectionItemsSecurity
}

type AddImageCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
