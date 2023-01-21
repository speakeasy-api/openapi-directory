package shared

// ListPaymentRefundsResponse
// Defines the response returned by [ListPaymentRefunds](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/list-payment-refunds).
//
// Either `errors` or `refunds` is present in a given response (never both).
type ListPaymentRefundsResponse struct {
	Cursor  *string         `json:"cursor,omitempty"`
	Errors  []Error         `json:"errors,omitempty"`
	Refunds []PaymentRefund `json:"refunds,omitempty"`
}
