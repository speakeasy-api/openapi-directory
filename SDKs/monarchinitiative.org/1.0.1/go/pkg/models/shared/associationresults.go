package shared

type AssociationResults struct {
	Associations        []Association            `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet  `json:"compact_associations,omitempty"`
	Docs                []map[string]interface{} `json:"docs,omitempty"`
	FacetCounts         map[string]interface{}   `json:"facet_counts,omitempty"`
	Highlighting        map[string]interface{}   `json:"highlighting,omitempty"`
	NumFound            *int64                   `json:"numFound,omitempty"`
	Objects             []string                 `json:"objects,omitempty"`
}
