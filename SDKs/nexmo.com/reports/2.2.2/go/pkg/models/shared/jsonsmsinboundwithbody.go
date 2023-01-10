package shared

import (
	"time"
)

// JSONSmsInboundWithBody
// Inbound SMS
type JSONSmsInboundWithBody struct {
	AccountID    *string                `json:"account_id,omitempty"`
	Country      *string                `json:"country,omitempty"`
	CountryName  *string                `json:"country_name,omitempty"`
	Currency     *string                `json:"currency,omitempty"`
	DateReceived *time.Time             `json:"date_received,omitempty"`
	Direction    map[string]interface{} `json:"direction,omitempty"`
	From         *string                `json:"from,omitempty"`
	MessageBody  *string                `json:"message_body,omitempty"`
	MessageID    *string                `json:"message_id,omitempty"`
	Network      *string                `json:"network,omitempty"`
	NetworkName  *string                `json:"network_name,omitempty"`
	To           *string                `json:"to,omitempty"`
	TotalPrice   *float64               `json:"total_price,omitempty"`
}
