package shared

type VerifyCapabilityVersionEnum string

const (
	VerifyCapabilityVersionEnumV2 VerifyCapabilityVersionEnum = "v2"
)

type VerifyCapabilityWebhooksStatusURLHTTPMethodEnum string

const (
	VerifyCapabilityWebhooksStatusURLHTTPMethodEnumPost VerifyCapabilityWebhooksStatusURLHTTPMethodEnum = "POST"
)

// VerifyCapabilityWebhooksStatusURL
// Vonage will send request status events (e.g. `progress`, `complete`) to this URL
type VerifyCapabilityWebhooksStatusURL struct {
	Address    *string                                          `json:"address,omitempty"`
	HTTPMethod *VerifyCapabilityWebhooksStatusURLHTTPMethodEnum `json:"http_method,omitempty"`
}

type VerifyCapabilityWebhooks struct {
	StatusURL *VerifyCapabilityWebhooksStatusURL `json:"status_url,omitempty"`
}

// VerifyCapability
// Two factor authentication related configuration
type VerifyCapability struct {
	Version  *VerifyCapabilityVersionEnum `json:"version,omitempty"`
	Webhooks *VerifyCapabilityWebhooks    `json:"webhooks,omitempty"`
}
