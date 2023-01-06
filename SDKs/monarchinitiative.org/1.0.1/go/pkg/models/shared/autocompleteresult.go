package shared

type AutocompleteResult struct {
	Category      []string `json:"category,omitempty"`
	EquivalentIds []string `json:"equivalent_ids,omitempty"`
	HasHighlight  *bool    `json:"has_highlight,omitempty"`
	Highlight     *string  `json:"highlight,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Label         []string `json:"label,omitempty"`
	Match         *string  `json:"match,omitempty"`
	Taxon         *string  `json:"taxon,omitempty"`
	TaxonLabel    *string  `json:"taxon_label,omitempty"`
}
