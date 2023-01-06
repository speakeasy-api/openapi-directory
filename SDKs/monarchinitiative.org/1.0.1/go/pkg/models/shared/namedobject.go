package shared

type NamedObject struct {
	Consider    []string                 `json:"consider,omitempty"`
	Deprecated  *bool                    `json:"deprecated,omitempty"`
	Description *string                  `json:"description,omitempty"`
	ReplacedBy  []string                 `json:"replaced_by,omitempty"`
	Synonyms    []map[string]interface{} `json:"synonyms,omitempty"`
	Types       []string                 `json:"types,omitempty"`
}
