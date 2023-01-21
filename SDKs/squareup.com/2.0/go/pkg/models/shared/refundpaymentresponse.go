package shared

// RefundPaymentResponse
// Defines the response returned by
// [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
//
// If there are errors processing the request, the `refund` field might not be
// present, or it might be present with a status of `FAILED`.
type RefundPaymentResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Refund *PaymentRefund `json:"refund,omitempty"`
}
