package shared

// SearchCustomersRequest
// Defines the fields that are included in the request body of a request to the
// `SearchCustomers` endpoint.
type SearchCustomersRequest struct {
	Cursor *string        `json:"cursor,omitempty"`
	Limit  *int64         `json:"limit,omitempty"`
	Query  *CustomerQuery `json:"query,omitempty"`
}
