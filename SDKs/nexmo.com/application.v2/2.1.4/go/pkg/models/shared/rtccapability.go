package shared

type RtcCapabilityWebhooksEventURLHTTPMethodEnum string

const (
	RtcCapabilityWebhooksEventURLHTTPMethodEnumGet  RtcCapabilityWebhooksEventURLHTTPMethodEnum = "GET"
	RtcCapabilityWebhooksEventURLHTTPMethodEnumPost RtcCapabilityWebhooksEventURLHTTPMethodEnum = "POST"
)

// RtcCapabilityWebhooksEventURL
// Vonage will send RTC events to this URL
type RtcCapabilityWebhooksEventURL struct {
	Address    *string                                      `json:"address,omitempty"`
	HTTPMethod *RtcCapabilityWebhooksEventURLHTTPMethodEnum `json:"http_method,omitempty"`
}

type RtcCapabilityWebhooks struct {
	EventURL *RtcCapabilityWebhooksEventURL `json:"event_url,omitempty"`
}

// RtcCapability
// RTC / Conversation Service related configuration
type RtcCapability struct {
	LegPersistenceTime *int32                 `json:"leg_persistence_time,omitempty"`
	SignedCallbacks    *bool                  `json:"signed_callbacks,omitempty"`
	Webhooks           *RtcCapabilityWebhooks `json:"webhooks,omitempty"`
}
