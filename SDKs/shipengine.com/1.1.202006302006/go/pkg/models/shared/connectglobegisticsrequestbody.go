package shared

// ConnectGlobegisticsRequestBody
// A Globegistics account information request body
type ConnectGlobegisticsRequestBody struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Username string `json:"username"`
}
