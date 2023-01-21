package shared

// ChargeResponse
// Defines the fields that are included in the response body of
// a request to the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge) endpoint.
//
// One of `errors` or `transaction` is present in a given response (never both).
type ChargeResponse struct {
	Errors      []Error      `json:"errors,omitempty"`
	Transaction *Transaction `json:"transaction,omitempty"`
}
