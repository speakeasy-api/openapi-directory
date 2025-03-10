// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

// GetAuthValidate200ApplicationJSON - The supplied credentials are valid
type GetAuthValidate200ApplicationJSON struct {
	// The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none
	Premium *int64 `json:"premium,omitempty"`
}

type GetAuthValidateResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// The supplied credentials are valid
	GetAuthValidate200ApplicationJSONObject *GetAuthValidate200ApplicationJSON
}
