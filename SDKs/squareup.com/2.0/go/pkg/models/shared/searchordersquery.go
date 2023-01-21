package shared

// SearchOrdersQuery
// Contains query criteria for the search.
type SearchOrdersQuery struct {
	Filter *SearchOrdersFilter `json:"filter,omitempty"`
	Sort   *SearchOrdersSort   `json:"sort,omitempty"`
}
