// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetEmployeesFromEmployerPathParams struct {
	// The employers' unique identifier. E.g ER001
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeesFromEmployerHeaders struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployeesFromEmployerRequest struct {
	PathParams GetEmployeesFromEmployerPathParams
	Headers    GetEmployeesFromEmployerHeaders
}

type GetEmployeesFromEmployerResponse struct {
	ContentType string
	// Bad Request
	ErrorModel *shared.ErrorModel
	// The link collection object.
	LinkCollection *shared.LinkCollection
	StatusCode     int
	RawResponse    *http.Response
}
