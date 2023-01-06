package shared

import (
	"time"
)

type ContinuousProject struct {
	AnalyticsEnabled  *bool      `json:"analytics_enabled,omitempty"`
	AutoStartPostedit *bool      `json:"auto_start_postedit,omitempty"`
	CreatedAt         *time.Time `json:"created_at,omitempty"`
	ID                *int64     `json:"id,omitempty"`
	IsEnabled         *bool      `json:"is_enabled,omitempty"`
	MtEnabled         *bool      `json:"mt_enabled,omitempty"`
	Name              *string    `json:"name,omitempty"`
	PosteditEnabled   *bool      `json:"postedit_enabled,omitempty"`
	SourceLanguage    *string    `json:"source_language,omitempty"`
	TargetLanguages   []string   `json:"target_languages,omitempty"`
	Type              *string    `json:"type,omitempty"`
}
