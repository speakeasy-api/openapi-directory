package shared

// ErrorClientReference
// Invalid client reference
type ErrorClientReference struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
