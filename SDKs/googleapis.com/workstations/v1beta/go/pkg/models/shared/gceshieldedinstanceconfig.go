package shared

// GceShieldedInstanceConfig
// A set of Compute Engine Shielded instance options.
type GceShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
	EnableSecureBoot          *bool `json:"enableSecureBoot,omitempty"`
	EnableVtpm                *bool `json:"enableVtpm,omitempty"`
}
