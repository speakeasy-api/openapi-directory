package shared

// UpdatePaymentResponse
// Defines the response returned by
// [UpdatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/update-payment).
type UpdatePaymentResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Payment *Payment `json:"payment,omitempty"`
}
