package shared

// CreateWebhookRequestBody
// A create webhook request body
type CreateWebhookRequestBody struct {
	Event WebhookEventEnum       `json:"event"`
	URL   map[string]interface{} `json:"url"`
}
