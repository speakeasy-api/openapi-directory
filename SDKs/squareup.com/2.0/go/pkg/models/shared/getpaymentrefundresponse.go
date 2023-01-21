package shared

// GetPaymentRefundResponse
// Defines the response returned by [GetRefund](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/get-payment-refund).
//
// Note: If there are errors processing the request, the refund field might not be
// present or it might be present in a FAILED state.
type GetPaymentRefundResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Refund *PaymentRefund `json:"refund,omitempty"`
}
