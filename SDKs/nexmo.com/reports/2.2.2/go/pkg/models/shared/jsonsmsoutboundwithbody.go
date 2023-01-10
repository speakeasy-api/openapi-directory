package shared

import (
	"time"
)

// JSONSmsOutboundWithBody
// Outbound SMS
type JSONSmsOutboundWithBody struct {
	AccountID            *string        `json:"account_id,omitempty"`
	ClientRef            *string        `json:"client_ref,omitempty"`
	Concatenated         *bool          `json:"concatenated,omitempty"`
	Country              *string        `json:"country,omitempty"`
	CountryName          *string        `json:"country_name,omitempty"`
	Currency             *string        `json:"currency,omitempty"`
	DateFinalized        *time.Time     `json:"date_finalized,omitempty"`
	DateReceived         *time.Time     `json:"date_received,omitempty"`
	Direction            *DirectionEnum `json:"direction,omitempty"`
	ErrorCode            *string        `json:"error_code,omitempty"`
	ErrorCodeDescription *string        `json:"error_code_description,omitempty"`
	From                 *string        `json:"from,omitempty"`
	Latency              *int64         `json:"latency,omitempty"`
	MessageBody          *string        `json:"message_body,omitempty"`
	MessageID            *string        `json:"message_id,omitempty"`
	Network              *string        `json:"network,omitempty"`
	NetworkName          *string        `json:"network_name,omitempty"`
	Status               *SmsStatusEnum `json:"status,omitempty"`
	To                   *string        `json:"to,omitempty"`
	TotalPrice           *float64       `json:"total_price,omitempty"`
}
