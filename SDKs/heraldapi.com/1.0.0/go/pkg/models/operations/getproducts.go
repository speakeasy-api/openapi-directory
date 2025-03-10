// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetProductsRequest struct {
	// `id` for a specific producer.
	ProducerID *string `queryParam:"style=form,explode=true,name=producer_id"`
}

// GetProducts400ApplicationJSON - Bad Request: something was wrong with the included query param(s)
type GetProducts400ApplicationJSON struct {
	Errors []shared.ErrorV1 `json:"errors,omitempty"`
}

// GetProducts200ApplicationJSON - OK
type GetProducts200ApplicationJSON struct {
	Products []shared.ProductV1 `json:"products,omitempty"`
}

type GetProductsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	GetProducts200ApplicationJSONObject *GetProducts200ApplicationJSON
	// Bad Request: something was wrong with the included query param(s)
	GetProducts400ApplicationJSONObject *GetProducts400ApplicationJSON
}
