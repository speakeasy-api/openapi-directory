package shared

import (
	"time"
)

// VoiceCall
// Voice Call
type VoiceCall struct {
	AccountID          string           `json:"account_id"`
	CallbackURL        *string          `json:"callback_url,omitempty"`
	DateEnd            *time.Time       `json:"date_end,omitempty"`
	DateStart          *time.Time       `json:"date_start,omitempty"`
	Direction          *DirectionEnum   `json:"direction,omitempty"`
	From               *string          `json:"from,omitempty"`
	IncludeSubaccounts *bool            `json:"include_subaccounts,omitempty"`
	Network            *string          `json:"network,omitempty"`
	Product            ProductVoiceEnum `json:"product"`
	Status             *VoiceStatusEnum `json:"status,omitempty"`
	To                 *string          `json:"to,omitempty"`
}
