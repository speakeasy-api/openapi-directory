package shared

// ListCustomerGroupsResponse
// Defines the fields that are included in the response body of
// a request to the [ListCustomerGroups](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/list-customer-groups) endpoint.
//
// Either `errors` or `groups` is present in a given response (never both).
type ListCustomerGroupsResponse struct {
	Cursor *string         `json:"cursor,omitempty"`
	Errors []Error         `json:"errors,omitempty"`
	Groups []CustomerGroup `json:"groups,omitempty"`
}
