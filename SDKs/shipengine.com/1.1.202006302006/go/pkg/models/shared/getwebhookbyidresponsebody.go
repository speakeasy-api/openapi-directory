package shared

// GetWebhookByIDResponseBody
// A webhook
type GetWebhookByIDResponseBody struct {
	Event     WebhookEventEnum       `json:"event"`
	URL       map[string]interface{} `json:"url"`
	WebhookID map[string]interface{} `json:"webhook_id"`
}
