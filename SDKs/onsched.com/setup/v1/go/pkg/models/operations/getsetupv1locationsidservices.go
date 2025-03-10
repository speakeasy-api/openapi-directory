// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSetupV1LocationsIDServicesRequest struct {
	// id of business location, defaults to primary business location
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// Page limit default 20, max 100
	Limit *int `queryParam:"style=form,explode=true,name=limit"`
	// Starting row of page, default 0
	Offset *int `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1LocationsIDServicesResponse struct {
	// location service objects
	BusinessServiceListViewModel *shared.BusinessServiceListViewModel
	ContentType                  string
	StatusCode                   int
	RawResponse                  *http.Response
}
