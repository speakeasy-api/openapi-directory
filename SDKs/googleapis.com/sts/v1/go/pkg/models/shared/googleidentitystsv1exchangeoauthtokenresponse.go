package shared

// GoogleIdentityStsV1ExchangeOauthTokenResponse
// Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1
type GoogleIdentityStsV1ExchangeOauthTokenResponse struct {
	AccessToken  *string `json:"access_token,omitempty"`
	ExpiresIn    *int32  `json:"expires_in,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	Scope        *string `json:"scope,omitempty"`
	TokenType    *string `json:"token_type,omitempty"`
}
