// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ItemGetResponse struct {
	ContentType string
	// success
	ItemGetResponse map[string]interface{}
	// Error response.
	PlaidError  map[string]interface{}
	StatusCode  int
	RawResponse *http.Response
}
