package shared

// UpdateCustomerGroupResponse
// Defines the fields that are included in the response body of
// a request to the [UpdateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/update-customer-group) endpoint.
//
// Either `errors` or `group` is present in a given response (never both).
type UpdateCustomerGroupResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Group  *CustomerGroup `json:"group,omitempty"`
}
