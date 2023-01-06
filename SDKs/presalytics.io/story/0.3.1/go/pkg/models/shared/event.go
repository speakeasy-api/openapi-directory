package shared

// Event
// Base model for all types
type Event struct {
	Attributes      *string `json:"attributes,omitempty"`
	ChatPrompt      *string `json:"chat_prompt,omitempty"`
	ConversationID  *string `json:"conversation_id,omitempty"`
	DomSelectors    *string `json:"dom_selectors,omitempty"`
	IsChatHidden    *bool   `json:"is_chat_hidden,omitempty"`
	IsNotifyEnabled *bool   `json:"is_notify_enabled,omitempty"`
	Name            *string `json:"name,omitempty"`
}
