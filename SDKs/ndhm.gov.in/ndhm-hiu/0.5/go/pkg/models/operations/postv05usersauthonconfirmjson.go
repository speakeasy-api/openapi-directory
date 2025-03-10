// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthOnConfirmJSONRequest struct {
	// Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
	Authorization              string                            `header:"style=simple,explode=false,name=Authorization"`
	PatientAuthConfirmResponse shared.PatientAuthConfirmResponse `request:"mediaType=application/json"`
	// Identifier of the health information provider to which the request was intended.
	XHipID string `header:"style=simple,explode=false,name=X-HIP-ID"`
	// Identifier of the health information user to which the request was intended.
	XHiuID string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05UsersAuthOnConfirmJSONResponse struct {
	Body        []byte
	ContentType string
	// **Causes:**
	//   * required details not provided
	//   * neither auth nor error specified
	//
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
}
