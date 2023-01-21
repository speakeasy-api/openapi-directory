package shared

// ListCustomersResponse
// Defines the fields that are included in the response body of
// a request to the `ListCustomers` endpoint.
//
// Either `errors` or `customers` is present in a given response (never both).
type ListCustomersResponse struct {
	Cursor    *string    `json:"cursor,omitempty"`
	Customers []Customer `json:"customers,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
