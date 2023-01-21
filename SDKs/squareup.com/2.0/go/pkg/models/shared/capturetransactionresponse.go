package shared

// CaptureTransactionResponse
// Defines the fields that are included in the response body of
// a request to the [CaptureTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/capture-transaction) endpoint.
type CaptureTransactionResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
