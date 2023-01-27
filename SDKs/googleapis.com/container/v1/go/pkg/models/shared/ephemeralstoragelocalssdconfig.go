package shared

// EphemeralStorageLocalSsdConfig
// EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSD.
type EphemeralStorageLocalSsdConfig struct {
	LocalSsdCount *int32 `json:"localSsdCount,omitempty"`
}
