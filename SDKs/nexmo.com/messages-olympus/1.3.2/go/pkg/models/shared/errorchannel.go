package shared

// ErrorChannel
// Unsupported channel
type ErrorChannel struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
