package shared

type SequenceLocation struct {
	AssociationCounts map[string]interface{} `json:"association_counts,omitempty"`
	Category          []string               `json:"category,omitempty"`
	Consider          []string               `json:"consider,omitempty"`
	Deprecated        *bool                  `json:"deprecated,omitempty"`
	Description       *string                `json:"description,omitempty"`
	End               *SequencePosition      `json:"end,omitempty"`
	ID                string                 `json:"id"`
	Iri               *string                `json:"iri,omitempty"`
	Label             *string                `json:"label,omitempty"`
	Phase             *int64                 `json:"phase,omitempty"`
	ReplacedBy        []string               `json:"replaced_by,omitempty"`
	Score             *int64                 `json:"score,omitempty"`
	Start             *SequencePosition      `json:"start,omitempty"`
	Strand            *int64                 `json:"strand,omitempty"`
	Synonyms          []SynonymPropertyValue `json:"synonyms,omitempty"`
	Taxon             *Taxon                 `json:"taxon,omitempty"`
	Types             []string               `json:"types,omitempty"`
	Xrefs             []string               `json:"xrefs,omitempty"`
}
