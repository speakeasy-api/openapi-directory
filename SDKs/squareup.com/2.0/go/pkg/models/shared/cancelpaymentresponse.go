package shared

// CancelPaymentResponse
// Defines the response returned by [CancelPayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment).
type CancelPaymentResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Payment *Payment `json:"payment,omitempty"`
}
