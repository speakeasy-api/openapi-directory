// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TranslateMessageRequest struct {
	TranslateMessageRequest shared.TranslateMessageRequest `request:"mediaType=application/json"`
	// Automatically added
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TranslateMessageResponse struct {
	// Bad request
	APIError    *shared.APIError
	ContentType string
	Headers     map[string][]string
	// Successful response
	MessageResponse *shared.MessageResponse
	StatusCode      int
	RawResponse     *http.Response
}
