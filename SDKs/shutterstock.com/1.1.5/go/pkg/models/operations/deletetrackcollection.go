package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrackCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTrackCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteTrackCollectionRequest struct {
	PathParams DeleteTrackCollectionPathParams
	Security   DeleteTrackCollectionSecurity
}

type DeleteTrackCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
