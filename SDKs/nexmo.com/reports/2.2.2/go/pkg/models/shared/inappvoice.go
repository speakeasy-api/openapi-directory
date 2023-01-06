package shared

// InAppVoice
// In App Voice
type InAppVoice struct {
	ConversationID *string               `json:"conversation_id,omitempty"`
	Product        ProductInAppVoiceEnum `json:"product"`
}
