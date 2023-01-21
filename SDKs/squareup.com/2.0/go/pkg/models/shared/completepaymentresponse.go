package shared

// CompletePaymentResponse
// Defines the response returned by[CompletePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/complete-payment).
type CompletePaymentResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Payment *Payment `json:"payment,omitempty"`
}
