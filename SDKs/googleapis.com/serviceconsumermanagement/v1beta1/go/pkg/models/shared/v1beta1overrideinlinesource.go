package shared

// V1Beta1OverrideInlineSource
// Import data embedded in the request message
type V1Beta1OverrideInlineSource struct {
	Overrides []V1Beta1QuotaOverride `json:"overrides,omitempty"`
}
