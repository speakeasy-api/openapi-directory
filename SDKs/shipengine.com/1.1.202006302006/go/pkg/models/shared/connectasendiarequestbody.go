package shared

// ConnectAsendiaRequestBody
// An Asendia account information request body
type ConnectAsendiaRequestBody struct {
	AccountNumber string `json:"account_number"`
	FtpPassword   string `json:"ftp_password"`
	FtpUsername   string `json:"ftp_username"`
	Nickname      string `json:"nickname"`
}
