package shared

type TemplateMeta struct {
	Name *string `json:"name,omitempty"`
}

type Template struct {
	APIVersion *string                `json:"apiVersion,omitempty"`
	Kind       *TemplateKindEnum      `json:"kind,omitempty"`
	Meta       *TemplateMeta          `json:"meta,omitempty"`
	Spec       map[string]interface{} `json:"spec,omitempty"`
}
