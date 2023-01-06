package shared

import (
	"time"
)

type ClientStringTranslationStateEnum string

const (
	ClientStringTranslationStateEnumTranslated ClientStringTranslationStateEnum = "Translated"
	ClientStringTranslationStateEnumApproved   ClientStringTranslationStateEnum = "Approved"
)

type ClientStringTranslation struct {
	Content        *string                           `json:"content,omitempty"`
	LastChanged    *time.Time                        `json:"last_changed,omitempty"`
	Resource       *string                           `json:"resource,omitempty"`
	ResourceID     *string                           `json:"resource_id,omitempty"`
	State          *ClientStringTranslationStateEnum `json:"state,omitempty"`
	TargetLanguage *string                           `json:"target_language,omitempty"`
}
