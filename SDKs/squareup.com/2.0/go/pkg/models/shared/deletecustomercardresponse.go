package shared

// DeleteCustomerCardResponse
// Defines the fields that are included in the response body of
// a request to the `DeleteCustomerCard` endpoint.
type DeleteCustomerCardResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
