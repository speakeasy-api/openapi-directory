package shared

// InAppVoiceResponseCreateReport
// In App Voice
type InAppVoiceResponseCreateReport struct {
	ConversationID *string                `json:"conversation_id,omitempty"`
	Product        *ProductInAppVoiceEnum `json:"product,omitempty"`
}
