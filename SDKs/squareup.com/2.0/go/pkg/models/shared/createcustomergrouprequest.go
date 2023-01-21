package shared

// CreateCustomerGroupRequest
// Defines the body parameters that can be included in a request to the
// [CreateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/create-customer-group) endpoint.
type CreateCustomerGroupRequest struct {
	Group          CustomerGroup `json:"group"`
	IdempotencyKey *string       `json:"idempotency_key,omitempty"`
}
