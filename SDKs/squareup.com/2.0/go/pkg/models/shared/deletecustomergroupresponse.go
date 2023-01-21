package shared

// DeleteCustomerGroupResponse
// Defines the fields that are included in the response body of
// a request to the [DeleteCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/delete-customer-group) endpoint.
type DeleteCustomerGroupResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
