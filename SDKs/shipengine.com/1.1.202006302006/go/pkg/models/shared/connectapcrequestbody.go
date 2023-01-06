package shared

// ConnectApcRequestBody
// An APC account information request body
type ConnectApcRequestBody struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Username string `json:"username"`
}
