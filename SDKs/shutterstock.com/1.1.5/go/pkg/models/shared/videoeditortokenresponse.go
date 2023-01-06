package shared

// VideoEditorTokenResponseToken
// The user access token
type VideoEditorTokenResponseToken struct {
	ExpirationDate *float64 `json:"expirationDate,omitempty"`
	Value          *string  `json:"value,omitempty"`
}

// VideoEditorTokenResponse
// The response that includes the user access token and its expiration date
type VideoEditorTokenResponse struct {
	Token VideoEditorTokenResponseToken `json:"token"`
}
