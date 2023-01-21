package shared

// CancelPaymentByIdempotencyKeyResponse
// Defines the response returned by
// [CancelPaymentByIdempotencyKey](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment-by-idempotency-key).
// On success, `errors` is empty.
type CancelPaymentByIdempotencyKeyResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
