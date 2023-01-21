package shared

type TelegrafPlugin struct {
	Config      *string `json:"config,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Type        *string `json:"type,omitempty"`
}
