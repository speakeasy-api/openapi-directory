package shared

type EntryInfoProperty struct {
	Description *string                `json:"description,omitempty"`
	Sortable    *bool                  `json:"sortable,omitempty"`
	Type        map[string]interface{} `json:"type,omitempty"`
	Unit        *string                `json:"unit,omitempty"`
}
