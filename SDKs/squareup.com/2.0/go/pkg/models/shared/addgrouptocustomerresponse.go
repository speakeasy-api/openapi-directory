package shared

// AddGroupToCustomerResponse
// Defines the fields that are included in the response body of
// a request to the [AddGroupToCustomer](https://developer.squareup.com/reference/square_2021-08-18/customers-api/add-group-to-customer) endpoint.
type AddGroupToCustomerResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
