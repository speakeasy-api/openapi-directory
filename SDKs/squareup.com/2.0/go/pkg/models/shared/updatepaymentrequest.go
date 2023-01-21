package shared

// UpdatePaymentRequest
// Describes a request to update a payment using
// [UpdatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/update-payment).
type UpdatePaymentRequest struct {
	IdempotencyKey string   `json:"idempotency_key"`
	Payment        *Payment `json:"payment,omitempty"`
}
