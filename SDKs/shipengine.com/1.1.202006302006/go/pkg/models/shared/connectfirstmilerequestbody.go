package shared

// ConnectFirstmileRequestBody
// A First Mile account information request body
type ConnectFirstmileRequestBody struct {
	MailerID    string  `json:"mailer_id"`
	Nickname    string  `json:"nickname"`
	Password    string  `json:"password"`
	ProfileName *string `json:"profile_name,omitempty"`
}
