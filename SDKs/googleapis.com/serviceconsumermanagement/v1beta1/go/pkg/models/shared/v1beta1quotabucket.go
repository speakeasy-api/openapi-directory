package shared

// V1Beta1QuotaBucket
// A quota bucket is a quota provisioning unit for a specific set of dimensions.
type V1Beta1QuotaBucket struct {
	AdminOverride    *V1Beta1QuotaOverride `json:"adminOverride,omitempty"`
	ConsumerOverride *V1Beta1QuotaOverride `json:"consumerOverride,omitempty"`
	DefaultLimit     *string               `json:"defaultLimit,omitempty"`
	Dimensions       map[string]string     `json:"dimensions,omitempty"`
	EffectiveLimit   *string               `json:"effectiveLimit,omitempty"`
	ProducerOverride *V1Beta1QuotaOverride `json:"producerOverride,omitempty"`
}
