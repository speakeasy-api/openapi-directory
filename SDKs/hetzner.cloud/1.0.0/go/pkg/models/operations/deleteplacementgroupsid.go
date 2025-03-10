// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeletePlacementGroupsIDRequest struct {
	// ID of the resource
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePlacementGroupsIDResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
