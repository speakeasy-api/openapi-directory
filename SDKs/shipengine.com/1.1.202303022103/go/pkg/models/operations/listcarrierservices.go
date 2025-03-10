// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListCarrierServicesRequest struct {
	// Carrier ID
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type ListCarrierServicesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// The request contained errors.
	ErrorResponseBody *shared.ErrorResponseBody
	// The request was a success.
	ListCarrierServicesResponseBody *shared.ListCarrierServicesResponseBody
}
