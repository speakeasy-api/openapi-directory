package shared

import (
	"time"
)

// CsvConversations
// Conversations
type CsvConversations struct {
	AccountID      *string    `json:"account_id,omitempty"`
	ApplicationID  *string    `json:"application_id,omitempty"`
	ClientRef      *string    `json:"client_ref,omitempty"`
	ConversationID *string    `json:"conversation_id,omitempty"`
	CreationDate   *time.Time `json:"creation_date,omitempty"`
	Currency       *string    `json:"currency,omitempty"`
	ID             *string    `json:"id,omitempty"`
	Price          *float64   `json:"price,omitempty"`
	RequestID      *string    `json:"request_id,omitempty"`
	TotalPrice     *float64   `json:"total_price,omitempty"`
	UserID         *string    `json:"user_id,omitempty"`
}
