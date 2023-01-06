package shared

type SearchResult struct {
	Docs         []map[string]interface{} `json:"docs,omitempty"`
	FacetCounts  map[string]interface{}   `json:"facet_counts,omitempty"`
	Highlighting map[string]interface{}   `json:"highlighting,omitempty"`
	NumFound     *int64                   `json:"numFound,omitempty"`
}
