package shared

type Feature struct {
	ID        *string `json:"id,omitempty"`
	IsPresent *bool   `json:"isPresent,omitempty"`
	Label     *string `json:"label,omitempty"`
	Type      *string `json:"type,omitempty"`
}
