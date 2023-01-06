package shared

type ContinuousProjectUpdateContent struct {
	AnalyticsEnabled  *bool                       `json:"analytics_enabled,omitempty"`
	AutoStartPostedit *bool                       `json:"auto_start_postedit,omitempty"`
	IsEnabled         *bool                       `json:"is_enabled,omitempty"`
	Languages         []ContinuousProjectLanguage `json:"languages,omitempty"`
	MtEnabled         *bool                       `json:"mt_enabled,omitempty"`
	Name              *string                     `json:"name,omitempty"`
	PosteditEnabled   *bool                       `json:"postedit_enabled,omitempty"`
}
