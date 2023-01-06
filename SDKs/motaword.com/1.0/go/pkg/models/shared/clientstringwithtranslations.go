package shared

import (
	"time"
)

type ClientStringWithTranslations struct {
	Content      *string                   `json:"content,omitempty"`
	Language     *string                   `json:"language,omitempty"`
	LastChanged  *time.Time                `json:"last_changed,omitempty"`
	Translations []ClientStringTranslation `json:"translations,omitempty"`
}
