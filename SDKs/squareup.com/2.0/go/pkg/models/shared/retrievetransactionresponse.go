package shared

// RetrieveTransactionResponse
// Defines the fields that are included in the response body of
// a request to the [RetrieveTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/retrieve-transaction) endpoint.
//
// One of `errors` or `transaction` is present in a given response (never both).
type RetrieveTransactionResponse struct {
	Errors      []Error      `json:"errors,omitempty"`
	Transaction *Transaction `json:"transaction,omitempty"`
}
