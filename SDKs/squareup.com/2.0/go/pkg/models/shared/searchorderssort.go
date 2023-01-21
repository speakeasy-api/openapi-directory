package shared

// SearchOrdersSort
// Sorting criteria for a `SearchOrders` request. Results can only be sorted
// by a timestamp field.
type SearchOrdersSort struct {
	SortField string  `json:"sort_field"`
	SortOrder *string `json:"sort_order,omitempty"`
}
