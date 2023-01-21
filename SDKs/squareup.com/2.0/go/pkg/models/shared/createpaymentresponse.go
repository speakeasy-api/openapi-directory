package shared

// CreatePaymentResponse
// Defines the response returned by [CreatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
//
// If there are errors processing the request, the `payment` field might not be
// present, or it might be present with a status of `FAILED`.
type CreatePaymentResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Payment *Payment `json:"payment,omitempty"`
}
