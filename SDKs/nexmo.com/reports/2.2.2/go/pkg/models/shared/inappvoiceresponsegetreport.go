package shared

// InAppVoiceResponseGetReport
// In App Voice
type InAppVoiceResponseGetReport struct {
	ConversationID *string                `json:"conversation_id,omitempty"`
	Product        *ProductInAppVoiceEnum `json:"product,omitempty"`
}
