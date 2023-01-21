package shared

// RenamableField
// Describes a field that can be renamed and made visible or invisible.
type RenamableField struct {
	DisplayName  *string `json:"displayName,omitempty"`
	InternalName *string `json:"internalName,omitempty"`
	Visible      *bool   `json:"visible,omitempty"`
}

// RenamableFieldInput
// Describes a field that can be renamed and made visible or invisible.
type RenamableFieldInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	Visible     *bool   `json:"visible,omitempty"`
}
