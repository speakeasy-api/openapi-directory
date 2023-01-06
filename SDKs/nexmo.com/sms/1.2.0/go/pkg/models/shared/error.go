package shared

// Error
// Error
type Error struct {
	MessageCount *string        `json:"message-count,omitempty"`
	Messages     []ErrorMessage `json:"messages,omitempty"`
}
