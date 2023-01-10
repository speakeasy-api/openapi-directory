package shared

import (
	"time"
)

// WebsocketCall
// WebSocket Call
type WebsocketCall struct {
	AccountID          string               `json:"account_id"`
	CallbackURL        *string              `json:"callback_url,omitempty"`
	DateEnd            *time.Time           `json:"date_end,omitempty"`
	DateStart          *time.Time           `json:"date_start,omitempty"`
	IncludeSubaccounts *bool                `json:"include_subaccounts,omitempty"`
	Product            ProductWebsocketEnum `json:"product"`
	Status             *string              `json:"status,omitempty"`
}
