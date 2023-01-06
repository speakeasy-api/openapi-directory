package shared

type NamedObject1 struct {
	Consider    []string               `json:"consider,omitempty"`
	Deprecated  *bool                  `json:"deprecated,omitempty"`
	Description *string                `json:"description,omitempty"`
	ReplacedBy  []string               `json:"replaced_by,omitempty"`
	Synonyms    []SynonymPropertyValue `json:"synonyms,omitempty"`
	Types       []string               `json:"types,omitempty"`
}
