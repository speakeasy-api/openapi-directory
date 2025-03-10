// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostNewCisJobRequest struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	// The the CIS job instruction object.
	CisJobInstructionBase shared.CisJobInstructionBase `request:"mediaType=application/json"`
}

type PostNewCisJobResponse struct {
	ContentType string
	// Bad Request
	ErrorModel *shared.ErrorModel
	// The link object.
	Link        *shared.Link
	StatusCode  int
	RawResponse *http.Response
}
