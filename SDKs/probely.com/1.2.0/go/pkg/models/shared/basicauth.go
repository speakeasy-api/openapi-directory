package shared

// BasicAuth
// Basic authentication credentials
type BasicAuth struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
