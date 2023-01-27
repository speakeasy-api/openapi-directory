package shared

// DatasetOutputConfig
// Output configuration for datasets.
type DatasetOutputConfig struct {
	GcsDestination *GcsOutputDestination `json:"gcsDestination,omitempty"`
}
