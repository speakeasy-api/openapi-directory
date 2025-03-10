// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AddExpiryListingsRawResponse struct {
	// Request was successful
	AftermarketListingAction *shared.AftermarketListingAction
	Body                     []byte
	ContentType              string
	// Request was malformed
	Error *shared.Error
	// Too many requests received within interval
	ErrorLimit  *shared.ErrorLimit
	StatusCode  int
	RawResponse *http.Response
}
