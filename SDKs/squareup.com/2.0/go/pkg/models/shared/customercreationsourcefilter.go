package shared

// CustomerCreationSourceFilter
// The creation source filter.
//
// If one or more creation sources are set, customer profiles are included in,
// or excluded from, the result if they match at least one of the filter criteria.
type CustomerCreationSourceFilter struct {
	Rule   *string  `json:"rule,omitempty"`
	Values []string `json:"values,omitempty"`
}
