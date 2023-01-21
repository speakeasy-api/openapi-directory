package shared

// CreateOrderResponse
// Defines the fields that are included in the response body of
// a request to the `CreateOrder` endpoint.
//
// Either `errors` or `order` is present in a given response, but never both.
type CreateOrderResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Order  *Order  `json:"order,omitempty"`
}
