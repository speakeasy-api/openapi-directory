package operations

import (
	"openapi/pkg/models/shared"
)

type RenameVideoCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RenameVideoCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type RenameVideoCollectionRequest struct {
	PathParams RenameVideoCollectionPathParams
	Request    shared.CollectionUpdateRequest `request:"mediaType=application/json"`
	Security   RenameVideoCollectionSecurity
}

type RenameVideoCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
