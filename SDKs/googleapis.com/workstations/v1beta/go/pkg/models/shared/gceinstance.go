package shared

// GceInstance
// A runtime using a Compute Engine instance.
type GceInstance struct {
	BootDiskSizeGb             *int32                         `json:"bootDiskSizeGb,omitempty"`
	ConfidentialInstanceConfig *GceConfidentialInstanceConfig `json:"confidentialInstanceConfig,omitempty"`
	DisablePublicIPAddresses   *bool                          `json:"disablePublicIpAddresses,omitempty"`
	MachineType                *string                        `json:"machineType,omitempty"`
	PoolSize                   *int32                         `json:"poolSize,omitempty"`
	ServiceAccount             *string                        `json:"serviceAccount,omitempty"`
	ShieldedInstanceConfig     *GceShieldedInstanceConfig     `json:"shieldedInstanceConfig,omitempty"`
	Tags                       []string                       `json:"tags,omitempty"`
}
