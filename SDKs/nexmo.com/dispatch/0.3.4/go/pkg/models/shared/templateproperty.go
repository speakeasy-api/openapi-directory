package shared

type TemplatePropertyParameters struct {
	Default *string `json:"default,omitempty"`
}

type TemplateProperty struct {
	Name       *string                      `json:"name,omitempty"`
	Parameters []TemplatePropertyParameters `json:"parameters,omitempty"`
}
