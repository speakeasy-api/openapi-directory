package shared

type DashboardQuery struct {
	BuilderConfig *BuilderConfig     `json:"builderConfig,omitempty"`
	EditMode      *QueryEditModeEnum `json:"editMode,omitempty"`
	Name          *string            `json:"name,omitempty"`
	Text          *string            `json:"text,omitempty"`
}
