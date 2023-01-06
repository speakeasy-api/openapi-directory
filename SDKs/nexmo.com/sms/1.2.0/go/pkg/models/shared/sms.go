package shared

// Sms
// Message sent
type Sms struct {
	MessageCount *string   `json:"message-count,omitempty"`
	Messages     []Message `json:"messages,omitempty"`
}
