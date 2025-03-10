// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ResetPasswordResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Invalid request. See Error message payload for details of failure
	InlineResponse400 *shared.InlineResponse400
}
