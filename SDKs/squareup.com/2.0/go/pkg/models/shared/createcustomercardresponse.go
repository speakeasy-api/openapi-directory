package shared

// CreateCustomerCardResponse
// Defines the fields that are included in the response body of
// a request to the `CreateCustomerCard` endpoint.
//
// Either `errors` or `card` is present in a given response (never both).
type CreateCustomerCardResponse struct {
	Card   *Card   `json:"card,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
