// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type BankTransferCreateResponse struct {
	// OK
	BankTransferCreateResponse map[string]interface{}
	ContentType                string
	// Error response
	PlaidError  map[string]interface{}
	StatusCode  int
	RawResponse *http.Response
}
