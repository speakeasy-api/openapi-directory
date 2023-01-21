package shared

// ListRefundsResponse
// Defines the fields that are included in the response body of
// a request to the [ListRefunds](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/list-refunds) endpoint.
//
// One of `errors` or `refunds` is present in a given response (never both).
type ListRefundsResponse struct {
	Cursor  *string  `json:"cursor,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
	Refunds []Refund `json:"refunds,omitempty"`
}
