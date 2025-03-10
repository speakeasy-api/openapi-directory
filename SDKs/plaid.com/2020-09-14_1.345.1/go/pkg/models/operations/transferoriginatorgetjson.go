// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type TransferOriginatorGetJSONResponse struct {
	ContentType string
	// Error response
	PlaidError  map[string]interface{}
	StatusCode  int
	RawResponse *http.Response
	// OK
	TransferOriginatorGetResponse map[string]interface{}
}
