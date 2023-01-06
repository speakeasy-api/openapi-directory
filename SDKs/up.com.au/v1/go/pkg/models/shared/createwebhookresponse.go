package shared

// CreateWebhookResponse
// Successful response after creating a webhook.
type CreateWebhookResponse struct {
	Data WebhookResource `json:"data"`
}
