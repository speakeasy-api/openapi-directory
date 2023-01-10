package shared

type BioObject struct {
	AssociationCounts map[string]interface{} `json:"association_counts,omitempty"`
	Category          []string               `json:"category,omitempty"`
	Consider          []string               `json:"consider,omitempty"`
	Deprecated        *bool                  `json:"deprecated,omitempty"`
	Description       *string                `json:"description,omitempty"`
	ID                string                 `json:"id"`
	Iri               *string                `json:"iri,omitempty"`
	Label             *string                `json:"label,omitempty"`
	ReplacedBy        []string               `json:"replaced_by,omitempty"`
	Synonyms          []SynonymPropertyValue `json:"synonyms,omitempty"`
	Taxon             *Taxon                 `json:"taxon,omitempty"`
	Types             []string               `json:"types,omitempty"`
	Xrefs             []string               `json:"xrefs,omitempty"`
}
