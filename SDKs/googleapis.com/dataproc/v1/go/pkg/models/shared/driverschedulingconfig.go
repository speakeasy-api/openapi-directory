package shared

// DriverSchedulingConfig
// Driver scheduling configuration.
type DriverSchedulingConfig struct {
	MemoryMb *int32 `json:"memoryMb,omitempty"`
	Vcores   *int32 `json:"vcores,omitempty"`
}
