package shared

type VoiceCapabilityPaymentsGatewaysModeEnum string

const (
	VoiceCapabilityPaymentsGatewaysModeEnumTest VoiceCapabilityPaymentsGatewaysModeEnum = "test"
	VoiceCapabilityPaymentsGatewaysModeEnumLive VoiceCapabilityPaymentsGatewaysModeEnum = "live"
)

type VoiceCapabilityPaymentsGateways struct {
	Credential *string                                  `json:"credential,omitempty"`
	Mode       *VoiceCapabilityPaymentsGatewaysModeEnum `json:"mode,omitempty"`
	Type       *string                                  `json:"type,omitempty"`
}

// VoiceCapabilityPayments
// encompass all the payment related fields
type VoiceCapabilityPayments struct {
	Gateways []VoiceCapabilityPaymentsGateways `json:"gateways,omitempty"`
}

type VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum string

const (
	VoiceCapabilityWebhooksAnswerURLHTTPMethodEnumGet  VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum = "GET"
	VoiceCapabilityWebhooksAnswerURLHTTPMethodEnumPost VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum = "POST"
)

type VoiceCapabilityWebhooksAnswerURL struct {
	Address           *string                                         `json:"address,omitempty"`
	ConnectionTimeout *int64                                          `json:"connection_timeout,omitempty"`
	HTTPMethod        *VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum `json:"http_method,omitempty"`
	SocketTimeout     *int64                                          `json:"socket_timeout,omitempty"`
}

type VoiceCapabilityWebhooksEventURLHTTPMethodEnum string

const (
	VoiceCapabilityWebhooksEventURLHTTPMethodEnumGet  VoiceCapabilityWebhooksEventURLHTTPMethodEnum = "GET"
	VoiceCapabilityWebhooksEventURLHTTPMethodEnumPost VoiceCapabilityWebhooksEventURLHTTPMethodEnum = "POST"
)

// VoiceCapabilityWebhooksEventURL
// Vonage will send call events (e.g. `ringing`, `answered`) to this URL
type VoiceCapabilityWebhooksEventURL struct {
	Address           *string                                        `json:"address,omitempty"`
	ConnectionTimeout *int64                                         `json:"connection_timeout,omitempty"`
	HTTPMethod        *VoiceCapabilityWebhooksEventURLHTTPMethodEnum `json:"http_method,omitempty"`
	SocketTimeout     *int64                                         `json:"socket_timeout,omitempty"`
}

type VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum string

const (
	VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnumGet  VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum = "GET"
	VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnumPost VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum = "POST"
)

type VoiceCapabilityWebhooksFallbackAnswerURL struct {
	Address           *string                                                 `json:"address,omitempty"`
	ConnectionTimeout *int64                                                  `json:"connection_timeout,omitempty"`
	HTTPMethod        *VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum `json:"http_method,omitempty"`
	SocketTimeout     *int64                                                  `json:"socket_timeout,omitempty"`
}

type VoiceCapabilityWebhooks struct {
	AnswerURL         *VoiceCapabilityWebhooksAnswerURL         `json:"answer_url,omitempty"`
	EventURL          *VoiceCapabilityWebhooksEventURL          `json:"event_url,omitempty"`
	FallbackAnswerURL *VoiceCapabilityWebhooksFallbackAnswerURL `json:"fallback_answer_url,omitempty"`
}

// VoiceCapability
// Voice related configuration
type VoiceCapability struct {
	ConversationTTL *int64                   `json:"conversation_ttl,omitempty"`
	Payments        *VoiceCapabilityPayments `json:"payments,omitempty"`
	SignedCallbacks *bool                    `json:"signed_callbacks,omitempty"`
	Webhooks        *VoiceCapabilityWebhooks `json:"webhooks,omitempty"`
}
