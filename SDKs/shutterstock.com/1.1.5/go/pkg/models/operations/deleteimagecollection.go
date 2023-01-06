package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteImageCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteImageCollectionRequest struct {
	PathParams DeleteImageCollectionPathParams
	Security   DeleteImageCollectionSecurity
}

type DeleteImageCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
