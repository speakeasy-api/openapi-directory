package shared

// SearchOrdersFilter
// Filtering criteria to use for a `SearchOrders` request. Multiple filters
// are ANDed together.
type SearchOrdersFilter struct {
	CustomerFilter    *SearchOrdersCustomerFilter    `json:"customer_filter,omitempty"`
	DateTimeFilter    *SearchOrdersDateTimeFilter    `json:"date_time_filter,omitempty"`
	FulfillmentFilter *SearchOrdersFulfillmentFilter `json:"fulfillment_filter,omitempty"`
	SourceFilter      *SearchOrdersSourceFilter      `json:"source_filter,omitempty"`
	StateFilter       *SearchOrdersStateFilter       `json:"state_filter,omitempty"`
}
