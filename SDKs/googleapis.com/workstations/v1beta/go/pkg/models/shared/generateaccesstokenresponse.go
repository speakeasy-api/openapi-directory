package shared

// GenerateAccessTokenResponse
// Response message for GenerateAccessToken.
type GenerateAccessTokenResponse struct {
	AccessToken *string `json:"accessToken,omitempty"`
	ExpireTime  *string `json:"expireTime,omitempty"`
}
