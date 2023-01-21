package shared

// PayOrderResponse
// Defines the fields that are included in the response body of a request to the
// [PayOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/pay-order) endpoint.
type PayOrderResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Order  *Order  `json:"order,omitempty"`
}
