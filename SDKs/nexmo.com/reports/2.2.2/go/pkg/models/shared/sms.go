package shared

import (
	"time"
)

// Sms
// SMS
type Sms struct {
	AccountID          string         `json:"account_id"`
	AccountRef         *string        `json:"account_ref,omitempty"`
	CallbackURL        *string        `json:"callback_url,omitempty"`
	ClientRef          *string        `json:"client_ref,omitempty"`
	DateEnd            *time.Time     `json:"date_end,omitempty"`
	DateStart          *time.Time     `json:"date_start,omitempty"`
	Direction          DirectionEnum  `json:"direction"`
	From               *string        `json:"from,omitempty"`
	IncludeMessage     *bool          `json:"include_message,omitempty"`
	IncludeSubaccounts *bool          `json:"include_subaccounts,omitempty"`
	Network            *string        `json:"network,omitempty"`
	Product            ProductSmsEnum `json:"product"`
	ShowConcatenated   *bool          `json:"show_concatenated,omitempty"`
	Status             *SmsStatusEnum `json:"status,omitempty"`
	To                 *string        `json:"to,omitempty"`
}
