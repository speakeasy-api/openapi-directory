package shared

// UpdateCustomerGroupRequest
// Defines the body parameters that can be included in a request to the
// [UpdateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/update-customer-group) endpoint.
type UpdateCustomerGroupRequest struct {
	Group CustomerGroup `json:"group"`
}
