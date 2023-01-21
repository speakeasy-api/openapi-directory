package shared

// CreateMobileAuthorizationCodeRequest
// Defines the body parameters that can be provided in a request to the
// __CreateMobileAuthorizationCode__ endpoint.
type CreateMobileAuthorizationCodeRequest struct {
	LocationID *string `json:"location_id,omitempty"`
}
