package shared

// GcsInputSource
// The Google Cloud Storage location for the input content.
type GcsInputSource struct {
	InputURI *string `json:"inputUri,omitempty"`
}
