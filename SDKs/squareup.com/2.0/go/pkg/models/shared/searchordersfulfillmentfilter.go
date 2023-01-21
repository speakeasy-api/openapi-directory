package shared

// SearchOrdersFulfillmentFilter
// Filter based on [order fulfillment](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillment) information.
type SearchOrdersFulfillmentFilter struct {
	FulfillmentStates []string `json:"fulfillment_states,omitempty"`
	FulfillmentTypes  []string `json:"fulfillment_types,omitempty"`
}
