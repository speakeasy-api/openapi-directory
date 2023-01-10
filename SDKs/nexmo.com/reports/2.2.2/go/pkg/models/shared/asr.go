package shared

import (
	"time"
)

// Asr
// ASR
type Asr struct {
	AccountID          string         `json:"account_id"`
	CallbackURL        *string        `json:"callback_url,omitempty"`
	DateEnd            *time.Time     `json:"date_end,omitempty"`
	DateStart          *time.Time     `json:"date_start,omitempty"`
	Direction          *DirectionEnum `json:"direction,omitempty"`
	From               *string        `json:"from,omitempty"`
	IncludeSubaccounts *bool          `json:"include_subaccounts,omitempty"`
	Product            ProductAsrEnum `json:"product"`
	Status             *AsrStatusEnum `json:"status,omitempty"`
	To                 *string        `json:"to,omitempty"`
}
