package shared

import (
	"time"
)

// CsvVoice
// Voice Call
type CsvVoice struct {
	AccountID         *string          `json:"account_id,omitempty"`
	CallID            *string          `json:"call_id,omitempty"`
	Country           *string          `json:"country,omitempty"`
	CountryName       *string          `json:"country_name,omitempty"`
	Currency          *string          `json:"currency,omitempty"`
	DateEnd           *time.Time       `json:"date_end,omitempty"`
	DateStart         *time.Time       `json:"date_start,omitempty"`
	Direction         *DirectionEnum   `json:"direction,omitempty"`
	Duration          *int64           `json:"duration,omitempty"`
	From              *string          `json:"from,omitempty"`
	Network           *string          `json:"network,omitempty"`
	NetworkName       *string          `json:"network_name,omitempty"`
	Price             *float64         `json:"price,omitempty"`
	Status            *VoiceStatusEnum `json:"status,omitempty"`
	StatusDescription *string          `json:"status_description,omitempty"`
	To                *string          `json:"to,omitempty"`
	TotalPrice        *float64         `json:"total_price,omitempty"`
}
