package shared

// UpdateWebhookRequestBody
// An update webhook request body
type UpdateWebhookRequestBody struct {
	URL map[string]interface{} `json:"url,omitempty"`
}
