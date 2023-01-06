package shared

// TestEcho
// Text to echo in the response
type TestEcho struct {
	Text *string `json:"text,omitempty"`
}
