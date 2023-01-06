package shared

// ConnectRrDonnelleyRequestBody
// A RR Donnelley account information request body
type ConnectRrDonnelleyRequestBody struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Username string `json:"username"`
}
