package shared

// ConnectSendleRequestBody
// A Sendle account information request body
type ConnectSendleRequestBody struct {
	APIKey   string `json:"api_key"`
	Nickname string `json:"nickname"`
	SendleID string `json:"sendle_id"`
}
