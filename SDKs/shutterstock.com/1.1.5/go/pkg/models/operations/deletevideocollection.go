package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteVideoCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DeleteVideoCollectionRequest struct {
	PathParams DeleteVideoCollectionPathParams
	Security   DeleteVideoCollectionSecurity
}

type DeleteVideoCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
