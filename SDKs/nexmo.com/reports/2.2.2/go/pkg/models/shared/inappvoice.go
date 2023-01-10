package shared

import (
	"time"
)

// InAppVoice
// In App Voice
type InAppVoice struct {
	AccountID          string                `json:"account_id"`
	CallbackURL        *string               `json:"callback_url,omitempty"`
	ConversationID     *string               `json:"conversation_id,omitempty"`
	DateEnd            *time.Time            `json:"date_end,omitempty"`
	DateStart          *time.Time            `json:"date_start,omitempty"`
	IncludeSubaccounts *bool                 `json:"include_subaccounts,omitempty"`
	Product            ProductInAppVoiceEnum `json:"product"`
}
