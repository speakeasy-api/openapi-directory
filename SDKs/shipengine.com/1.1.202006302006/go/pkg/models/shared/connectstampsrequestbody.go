package shared

// ConnectStampsRequestBody
// A Stamps account information request body
type ConnectStampsRequestBody struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Username string `json:"username"`
}
