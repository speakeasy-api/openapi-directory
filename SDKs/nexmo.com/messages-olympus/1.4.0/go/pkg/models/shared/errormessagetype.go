package shared

// ErrorMessageType
// Invalid message type
type ErrorMessageType struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
