package shared

// APIKeyInput
// API Key object
type APIKeyInput struct {
	Name *string `json:"name,omitempty"`
}

// APIKey
// API Key object
type APIKey struct {
	ID   *string `json:"id,omitempty"`
	Key  *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}
