package shared

// RemoveGroupFromCustomerResponse
// Defines the fields that are included in the response body of
// a request to the [RemoveGroupFromCustomer](https://developer.squareup.com/reference/square_2021-08-18/customers-api/remove-group-from-customer)
// endpoint.
type RemoveGroupFromCustomerResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
