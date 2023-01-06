package shared

// ErrorUnauthorizedMissingCredentials
// Missing or Invalid Credentials
type ErrorUnauthorizedMissingCredentials struct {
	Detail   *string `json:"detail,omitempty"`
	Instance string  `json:"instance"`
	Title    string  `json:"title"`
	Type     string  `json:"type"`
}
