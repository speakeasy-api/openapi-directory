// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateBreakTypeSecurity struct {
	Oauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type CreateBreakTypeResponse struct {
	ContentType string
	// Success
	CreateBreakTypeResponse *shared.CreateBreakTypeResponse
	StatusCode              int
	RawResponse             *http.Response
}
