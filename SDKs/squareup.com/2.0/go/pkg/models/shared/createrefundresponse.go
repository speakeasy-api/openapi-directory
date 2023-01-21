package shared

// CreateRefundResponse
// Defines the fields that are included in the response body of
// a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
//
// One of `errors` or `refund` is present in a given response (never both).
type CreateRefundResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Refund *Refund `json:"refund,omitempty"`
}
