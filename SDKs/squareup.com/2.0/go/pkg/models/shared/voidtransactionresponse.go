package shared

// VoidTransactionResponse
// Defines the fields that are included in the response body of
// a request to the [VoidTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/void-transaction) endpoint.
type VoidTransactionResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
