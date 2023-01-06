package shared

// UpdateVideoEditorRequest
// Request to update an existing instance of the video editor
type UpdateVideoEditorRequest struct {
	ImageSubscriptionID *string `json:"imageSubscriptionId,omitempty"`
	VideoSubscriptionID *string `json:"videoSubscriptionId,omitempty"`
	WebhookURL          *string `json:"webhookUrl,omitempty"`
}
