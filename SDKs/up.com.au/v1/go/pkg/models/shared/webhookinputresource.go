package shared

type WebhookInputResourceAttributes struct {
	Description *string `json:"description,omitempty"`
	URL         string  `json:"url"`
}

// WebhookInputResource
// Represents a webhook specified as request input.
type WebhookInputResource struct {
	Attributes WebhookInputResourceAttributes `json:"attributes"`
}
