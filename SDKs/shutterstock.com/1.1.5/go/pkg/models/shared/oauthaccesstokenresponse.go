package shared

// OauthAccessTokenResponse
// Access token response to client apps
type OauthAccessTokenResponse struct {
	AccessToken  string  `json:"access_token"`
	ExpiresIn    *int64  `json:"expires_in,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	TokenType    string  `json:"token_type"`
	UserToken    *string `json:"user_token,omitempty"`
}
