package shared

type Seq struct {
	Alphabet          *string                `json:"alphabet,omitempty"`
	AssociationCounts map[string]interface{} `json:"association_counts,omitempty"`
	Category          []string               `json:"category,omitempty"`
	Consider          []string               `json:"consider,omitempty"`
	Deprecated        *bool                  `json:"deprecated,omitempty"`
	Description       *string                `json:"description,omitempty"`
	ID                string                 `json:"id"`
	Iri               *string                `json:"iri,omitempty"`
	Label             *string                `json:"label,omitempty"`
	Md5checksum       *string                `json:"md5checksum,omitempty"`
	ReplacedBy        []string               `json:"replaced_by,omitempty"`
	Residues          *string                `json:"residues,omitempty"`
	Seqlen            *string                `json:"seqlen,omitempty"`
	Synonyms          []SynonymPropertyValue `json:"synonyms,omitempty"`
	Taxon             *Taxon                 `json:"taxon,omitempty"`
	Types             []string               `json:"types,omitempty"`
	Xrefs             []string               `json:"xrefs,omitempty"`
}
