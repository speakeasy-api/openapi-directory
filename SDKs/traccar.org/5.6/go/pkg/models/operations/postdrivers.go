// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostDriversResponse struct {
	ContentType string
	// OK
	Driver      *shared.Driver
	StatusCode  int
	RawResponse *http.Response
}
