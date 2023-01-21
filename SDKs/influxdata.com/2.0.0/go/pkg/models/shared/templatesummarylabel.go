package shared

type TemplateSummaryLabelProperties struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
}

type TemplateSummaryLabel struct {
	EnvReferences    []TemplateEnvReferences         `json:"envReferences,omitempty"`
	ID               *string                         `json:"id,omitempty"`
	Kind             *TemplateKindEnum               `json:"kind,omitempty"`
	Name             *string                         `json:"name,omitempty"`
	OrgID            *string                         `json:"orgID,omitempty"`
	Properties       *TemplateSummaryLabelProperties `json:"properties,omitempty"`
	TemplateMetaName *string                         `json:"templateMetaName,omitempty"`
}
