package shared

// GceConfidentialInstanceConfig
// A set of Compute Engine Confidential VM instance options.
type GceConfidentialInstanceConfig struct {
	EnableConfidentialCompute *bool `json:"enableConfidentialCompute,omitempty"`
}
