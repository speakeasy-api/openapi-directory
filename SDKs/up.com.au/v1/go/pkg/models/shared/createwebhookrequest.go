package shared

// CreateWebhookRequest
// Request to create a new webhook. This currently only requires a `url`
// attribute.
type CreateWebhookRequest struct {
	Data WebhookInputResource `json:"data"`
}
