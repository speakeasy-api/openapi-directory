package shared

type TemplateApplyActions1ActionEnum string

const (
	TemplateApplyActions1ActionEnumSkipKind TemplateApplyActions1ActionEnum = "skipKind"
)

type TemplateApplyActions1Properties struct {
	Kind TemplateKindEnum `json:"kind"`
}

type TemplateApplyActions1 struct {
	Action     *TemplateApplyActions1ActionEnum `json:"action,omitempty"`
	Properties *TemplateApplyActions1Properties `json:"properties,omitempty"`
}

type TemplateApplyActions2ActionEnum string

const (
	TemplateApplyActions2ActionEnumSkipResource TemplateApplyActions2ActionEnum = "skipResource"
)

type TemplateApplyActions2Properties struct {
	Kind                 TemplateKindEnum `json:"kind"`
	ResourceTemplateName string           `json:"resourceTemplateName"`
}

type TemplateApplyActions2 struct {
	Action     *TemplateApplyActions2ActionEnum `json:"action,omitempty"`
	Properties *TemplateApplyActions2Properties `json:"properties,omitempty"`
}

type TemplateApplyRemotes struct {
	ContentType *string `json:"contentType,omitempty"`
	URL         string  `json:"url"`
}

type TemplateApplyTemplate struct {
	ContentType *string    `json:"contentType,omitempty"`
	Contents    []Template `json:"contents,omitempty"`
	Sources     []string   `json:"sources,omitempty"`
}

type TemplateApplyTemplates struct {
	ContentType *string    `json:"contentType,omitempty"`
	Contents    []Template `json:"contents,omitempty"`
	Sources     []string   `json:"sources,omitempty"`
}

type TemplateApply struct {
	Actions   []interface{}            `json:"actions,omitempty"`
	DryRun    *bool                    `json:"dryRun,omitempty"`
	EnvRefs   map[string]interface{}   `json:"envRefs,omitempty"`
	OrgID     *string                  `json:"orgID,omitempty"`
	Remotes   []TemplateApplyRemotes   `json:"remotes,omitempty"`
	Secrets   map[string]string        `json:"secrets,omitempty"`
	StackID   *string                  `json:"stackID,omitempty"`
	Template  *TemplateApplyTemplate   `json:"template,omitempty"`
	Templates []TemplateApplyTemplates `json:"templates,omitempty"`
}
