package shared

// RetrieveCustomerResponse
// Defines the fields that are included in the response body of
// a request to the `RetrieveCustomer` endpoint.
//
// Either `errors` or `customer` is present in a given response (never both).
type RetrieveCustomerResponse struct {
	Customer *Customer `json:"customer,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
