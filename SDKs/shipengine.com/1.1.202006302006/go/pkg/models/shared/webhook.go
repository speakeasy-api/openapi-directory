package shared

// Webhook
// A webhook
type Webhook struct {
	Event     *WebhookEventEnum      `json:"event,omitempty"`
	URL       map[string]interface{} `json:"url,omitempty"`
	WebhookID map[string]interface{} `json:"webhook_id,omitempty"`
}
