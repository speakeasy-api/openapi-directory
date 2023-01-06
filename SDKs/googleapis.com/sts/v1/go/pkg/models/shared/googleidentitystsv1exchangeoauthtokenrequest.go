package shared

// GoogleIdentityStsV1ExchangeOauthTokenRequest
// Request message for ExchangeOauthToken
type GoogleIdentityStsV1ExchangeOauthTokenRequest struct {
	ClientID     *string `json:"clientId,omitempty"`
	Code         *string `json:"code,omitempty"`
	CodeVerifier *string `json:"codeVerifier,omitempty"`
	GrantType    *string `json:"grantType,omitempty"`
	RedirectURI  *string `json:"redirectUri,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
	Scope        *string `json:"scope,omitempty"`
}
