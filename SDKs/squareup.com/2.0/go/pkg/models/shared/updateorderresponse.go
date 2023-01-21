package shared

// UpdateOrderResponse
// Defines the fields that are included in the response body of
// a request to the [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.
type UpdateOrderResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Order  *Order  `json:"order,omitempty"`
}
