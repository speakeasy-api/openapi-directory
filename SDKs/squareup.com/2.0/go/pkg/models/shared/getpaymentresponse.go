package shared

// GetPaymentResponse
// Defines the response returned by [GetPayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/get-payment).
type GetPaymentResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Payment *Payment `json:"payment,omitempty"`
}
