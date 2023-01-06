package shared

// ConnectImexRequestBody
// An Imex account information request body
type ConnectImexRequestBody struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Username string `json:"username"`
}
