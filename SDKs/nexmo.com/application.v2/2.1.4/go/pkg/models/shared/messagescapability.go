package shared

type MessagesCapabilityWebhooksInboundURLHTTPMethodEnum string

const (
	MessagesCapabilityWebhooksInboundURLHTTPMethodEnumPost MessagesCapabilityWebhooksInboundURLHTTPMethodEnum = "POST"
)

// MessagesCapabilityWebhooksInboundURL
// Vonage will forward inbound messages to this URL
type MessagesCapabilityWebhooksInboundURL struct {
	Address    *string                                             `json:"address,omitempty"`
	HTTPMethod *MessagesCapabilityWebhooksInboundURLHTTPMethodEnum `json:"http_method,omitempty"`
}

type MessagesCapabilityWebhooksStatusURLHTTPMethodEnum string

const (
	MessagesCapabilityWebhooksStatusURLHTTPMethodEnumPost MessagesCapabilityWebhooksStatusURLHTTPMethodEnum = "POST"
)

// MessagesCapabilityWebhooksStatusURL
// Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL
type MessagesCapabilityWebhooksStatusURL struct {
	Address    *string                                            `json:"address,omitempty"`
	HTTPMethod *MessagesCapabilityWebhooksStatusURLHTTPMethodEnum `json:"http_method,omitempty"`
}

type MessagesCapabilityWebhooks struct {
	InboundURL *MessagesCapabilityWebhooksInboundURL `json:"inbound_url,omitempty"`
	StatusURL  *MessagesCapabilityWebhooksStatusURL  `json:"status_url,omitempty"`
}

// MessagesCapability
// Messages / Dispatch related configuration
type MessagesCapability struct {
	Version  *string                     `json:"version,omitempty"`
	Webhooks *MessagesCapabilityWebhooks `json:"webhooks,omitempty"`
}
