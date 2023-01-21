package shared

// UpdateOrderRequest
// Defines the fields that are included in requests to the
// [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.
type UpdateOrderRequest struct {
	FieldsToClear  []string `json:"fields_to_clear,omitempty"`
	IdempotencyKey *string  `json:"idempotency_key,omitempty"`
	Order          *Order   `json:"order,omitempty"`
}
