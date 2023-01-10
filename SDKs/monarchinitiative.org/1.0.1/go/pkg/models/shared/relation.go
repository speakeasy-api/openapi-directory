package shared

type Relation struct {
	Category    []string               `json:"category,omitempty"`
	Consider    []string               `json:"consider,omitempty"`
	Deprecated  *bool                  `json:"deprecated,omitempty"`
	Description *string                `json:"description,omitempty"`
	ID          string                 `json:"id"`
	Iri         *string                `json:"iri,omitempty"`
	Label       *string                `json:"label,omitempty"`
	ReplacedBy  []string               `json:"replaced_by,omitempty"`
	Synonyms    []SynonymPropertyValue `json:"synonyms,omitempty"`
	Types       []string               `json:"types,omitempty"`
}
