package shared

import (
	"time"
)

// Conversations
// Conversations
type Conversations struct {
	AccountID          string                   `json:"account_id"`
	CallbackURL        *string                  `json:"callback_url,omitempty"`
	ConversationID     *string                  `json:"conversation_id,omitempty"`
	DateEnd            *time.Time               `json:"date_end,omitempty"`
	DateStart          *time.Time               `json:"date_start,omitempty"`
	IncludeSubaccounts *bool                    `json:"include_subaccounts,omitempty"`
	Product            ProductConversationsEnum `json:"product"`
	Status             *string                  `json:"status,omitempty"`
}
