package shared

// Conversations
// Conversations
type Conversations struct {
	ConversationID *string                  `json:"conversation_id,omitempty"`
	Product        ProductConversationsEnum `json:"product"`
	Status         *string                  `json:"status,omitempty"`
}
