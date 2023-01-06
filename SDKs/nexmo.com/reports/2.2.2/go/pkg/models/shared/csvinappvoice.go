package shared

import (
	"time"
)

// CsvInAppVoice
// In App Voice
type CsvInAppVoice struct {
	AccountID      *string    `json:"account_id,omitempty"`
	ApplicationID  *string    `json:"application_id,omitempty"`
	ClientRef      *string    `json:"client_ref,omitempty"`
	ConversationID *string    `json:"conversation_id,omitempty"`
	Currency       *string    `json:"currency,omitempty"`
	DateEnd        *time.Time `json:"date_end,omitempty"`
	DateStart      *time.Time `json:"date_start,omitempty"`
	Duration       *int64     `json:"duration,omitempty"`
	ID             *string    `json:"id,omitempty"`
	LegID          *string    `json:"leg_id,omitempty"`
	Price          *float64   `json:"price,omitempty"`
	RequestID      *string    `json:"request_id,omitempty"`
	Status         *string    `json:"status,omitempty"`
	TotalPrice     *float64   `json:"total_price,omitempty"`
	UserID         *string    `json:"user_id,omitempty"`
}
