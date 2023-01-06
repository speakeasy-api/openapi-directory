package shared

import (
	"time"
)

// CsvAsr
// ASR
type CsvAsr struct {
	AccountID         *string        `json:"account_id,omitempty"`
	CallDateStart     *time.Time     `json:"call_date_start,omitempty"`
	CallID            *string        `json:"call_id,omitempty"`
	Currency          *string        `json:"currency,omitempty"`
	DateEnd           *time.Time     `json:"date_end,omitempty"`
	DateStart         *time.Time     `json:"date_start,omitempty"`
	Direction         *DirectionEnum `json:"direction,omitempty"`
	Duration          *int64         `json:"duration,omitempty"`
	From              *string        `json:"from,omitempty"`
	Price             *float64       `json:"price,omitempty"`
	Status            *AsrStatusEnum `json:"status,omitempty"`
	StatusDescription *string        `json:"status_description,omitempty"`
	To                *string        `json:"to,omitempty"`
	TotalPrice        *float64       `json:"total_price,omitempty"`
}
