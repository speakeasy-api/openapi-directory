package operations

import (
	"openapi/pkg/models/shared"
)

type RenameImageCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RenameImageCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type RenameImageCollectionRequest struct {
	PathParams RenameImageCollectionPathParams
	Request    shared.CollectionUpdateRequest `request:"mediaType=application/json"`
	Security   RenameImageCollectionSecurity
}

type RenameImageCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
