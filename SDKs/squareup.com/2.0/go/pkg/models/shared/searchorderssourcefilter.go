package shared

// SearchOrdersSourceFilter
// A filter based on order `source` information.
type SearchOrdersSourceFilter struct {
	SourceNames []string `json:"source_names,omitempty"`
}
