package shared

// ListPaymentsResponse
// Defines the response returned by [ListPayments](https://developer.squareup.com/reference/square_2021-08-18/payments-api/list-payments).
type ListPaymentsResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
	Payments []Payment `json:"payments,omitempty"`
}
