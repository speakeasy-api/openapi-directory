package shared

import (
	"time"
)

// Messages
// Messages
type Messages struct {
	AccountID          string              `json:"account_id"`
	CallbackURL        *string             `json:"callback_url,omitempty"`
	DateEnd            *time.Time          `json:"date_end,omitempty"`
	DateStart          *time.Time          `json:"date_start,omitempty"`
	Direction          DirectionEnum       `json:"direction"`
	From               *string             `json:"from,omitempty"`
	ID                 *string             `json:"id,omitempty"`
	IncludeMessage     *bool               `json:"include_message,omitempty"`
	IncludeSubaccounts *bool               `json:"include_subaccounts,omitempty"`
	Product            ProductMessagesEnum `json:"product"`
	To                 *string             `json:"to,omitempty"`
}
