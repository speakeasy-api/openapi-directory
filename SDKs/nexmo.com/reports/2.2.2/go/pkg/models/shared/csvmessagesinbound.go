package shared

import (
	"time"
)

// CsvMessagesInbound
// Inbound Messages
type CsvMessagesInbound struct {
	AccountID    *string        `json:"account_id,omitempty"`
	Currency     *string        `json:"currency,omitempty"`
	DateReceived *time.Time     `json:"date_received,omitempty"`
	Direction    *DirectionEnum `json:"direction,omitempty"`
	From         *string        `json:"from,omitempty"`
	MessageBody  *string        `json:"message_body,omitempty"`
	MessageID    *string        `json:"message_id,omitempty"`
	Provider     *string        `json:"provider,omitempty"`
	To           *string        `json:"to,omitempty"`
	TotalPrice   *float64       `json:"total_price,omitempty"`
}
