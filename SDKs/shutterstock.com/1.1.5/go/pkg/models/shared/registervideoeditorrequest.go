package shared

// RegisterVideoEditorRequest
// Request to register a new instance of the video editor
type RegisterVideoEditorRequest struct {
	ImageSubscriptionID string `json:"imageSubscriptionId"`
	VideoSubscriptionID string `json:"videoSubscriptionId"`
	WebhookURL          string `json:"webhookUrl"`
}
