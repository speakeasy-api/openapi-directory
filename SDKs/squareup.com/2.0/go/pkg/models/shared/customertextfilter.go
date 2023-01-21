package shared

// CustomerTextFilter
// A filter to select customers based on exact or fuzzy matching of
// customer attributes against a specified query. Depending on the customer attributes,
// the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
type CustomerTextFilter struct {
	Exact *string `json:"exact,omitempty"`
	Fuzzy *string `json:"fuzzy,omitempty"`
}
