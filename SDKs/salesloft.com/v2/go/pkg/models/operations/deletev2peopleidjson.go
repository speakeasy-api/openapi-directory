// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeleteV2PeopleIDJSONRequest struct {
	// Person id
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteV2PeopleIDJSONResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
