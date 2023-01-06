package shared

// ConversationsResponseCreateReport
// Conversations
type ConversationsResponseCreateReport struct {
	ConversationID *string                   `json:"conversation_id,omitempty"`
	Product        *ProductConversationsEnum `json:"product,omitempty"`
	Status         *string                   `json:"status,omitempty"`
}
