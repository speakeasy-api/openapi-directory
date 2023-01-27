package shared

// LocalNvmeSsdBlockConfig
// LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs
type LocalNvmeSsdBlockConfig struct {
	LocalSsdCount *int32 `json:"localSsdCount,omitempty"`
}
