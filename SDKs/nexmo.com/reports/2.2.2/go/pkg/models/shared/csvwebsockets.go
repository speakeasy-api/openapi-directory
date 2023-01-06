package shared

import (
	"time"
)

// CsvWebsockets
// WebSocket Call
type CsvWebsockets struct {
	AccountID  *string    `json:"account_id,omitempty"`
	CallID     *string    `json:"call_id,omitempty"`
	Currency   *string    `json:"currency,omitempty"`
	DateEnd    *time.Time `json:"date_end,omitempty"`
	DateStart  *time.Time `json:"date_start,omitempty"`
	Duration   *int64     `json:"duration,omitempty"`
	Price      *float64   `json:"price,omitempty"`
	Status     *string    `json:"status,omitempty"`
	TotalPrice *float64   `json:"total_price,omitempty"`
}
