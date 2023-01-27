package shared

// GcsOutputDestination
// The Google Cloud Storage location for the output content.
type GcsOutputDestination struct {
	OutputURIPrefix *string `json:"outputUriPrefix,omitempty"`
}
