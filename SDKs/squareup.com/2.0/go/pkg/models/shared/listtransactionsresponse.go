package shared

// ListTransactionsResponse
// Defines the fields that are included in the response body of
// a request to the [ListTransactions](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/list-transactions) endpoint.
//
// One of `errors` or `transactions` is present in a given response (never both).
type ListTransactionsResponse struct {
	Cursor       *string       `json:"cursor,omitempty"`
	Errors       []Error       `json:"errors,omitempty"`
	Transactions []Transaction `json:"transactions,omitempty"`
}
