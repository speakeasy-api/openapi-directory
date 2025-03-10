// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DeleteCisLineRequest struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	// The CIS line unique identifier. E.g. CISLN001
	CisLineID string `pathParam:"style=simple,explode=false,name=CisLineId"`
	// The employers' unique identifier. E.g ER001
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	// The sub contractors' unique identifier. E.g SUB001
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type DeleteCisLineResponse struct {
	ContentType string
	// Bad Request
	ErrorModel  *shared.ErrorModel
	StatusCode  int
	RawResponse *http.Response
}
