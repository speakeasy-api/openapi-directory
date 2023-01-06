package shared

// ErrorUnauthorizedInvalidApplication
// Invalid Application Type
type ErrorUnauthorizedInvalidApplication struct {
	Detail   *string `json:"detail,omitempty"`
	Instance string  `json:"instance"`
	Title    string  `json:"title"`
	Type     string  `json:"type"`
}
