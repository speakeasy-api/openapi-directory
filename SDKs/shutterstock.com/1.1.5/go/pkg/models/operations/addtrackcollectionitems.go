package operations

import (
	"openapi/pkg/models/shared"
)

type AddTrackCollectionItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddTrackCollectionItemsSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type AddTrackCollectionItemsRequest struct {
	PathParams AddTrackCollectionItemsPathParams
	Request    shared.CollectionItemRequest `request:"mediaType=application/json"`
	Security   AddTrackCollectionItemsSecurity
}

type AddTrackCollectionItemsResponse struct {
	ContentType string
	StatusCode  int64
}
