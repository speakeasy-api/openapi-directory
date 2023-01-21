package shared

// SearchOrdersStateFilter
// Filter by the current order `state`.
type SearchOrdersStateFilter struct {
	States []string `json:"states"`
}
