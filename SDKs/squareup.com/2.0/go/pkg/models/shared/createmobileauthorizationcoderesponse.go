package shared

// CreateMobileAuthorizationCodeResponse
// Defines the fields that are included in the response body of
// a request to the __CreateMobileAuthorizationCode__ endpoint.
type CreateMobileAuthorizationCodeResponse struct {
	AuthorizationCode *string `json:"authorization_code,omitempty"`
	Error             *Error  `json:"error,omitempty"`
	ExpiresAt         *string `json:"expires_at,omitempty"`
}
