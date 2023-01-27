package shared

// GenerateAccessTokenRequest
// Request message for GenerateAccessToken.
type GenerateAccessTokenRequest struct {
	ExpireTime *string `json:"expireTime,omitempty"`
	TTL        *string `json:"ttl,omitempty"`
}
