package operations

import (
	"openapi/pkg/models/shared"
)

type RenameTrackCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RenameTrackCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type RenameTrackCollectionRequest struct {
	PathParams RenameTrackCollectionPathParams
	Request    shared.CollectionUpdateRequest `request:"mediaType=application/json"`
	Security   RenameTrackCollectionSecurity
}

type RenameTrackCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
