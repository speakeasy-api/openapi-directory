package shared

// PayOrderRequest
// Defines the fields that are included in requests to the
// [PayOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/pay-order) endpoint.
type PayOrderRequest struct {
	IdempotencyKey string   `json:"idempotency_key"`
	OrderVersion   *int64   `json:"order_version,omitempty"`
	PaymentIds     []string `json:"payment_ids,omitempty"`
}
