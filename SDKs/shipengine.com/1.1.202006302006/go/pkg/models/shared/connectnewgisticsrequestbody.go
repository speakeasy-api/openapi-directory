package shared

// ConnectNewgisticsRequestBody
// A Newgistics account information request body
type ConnectNewgisticsRequestBody struct {
	InductionSite string `json:"induction_site"`
	MailerID      *int32 `json:"mailer_id,omitempty"`
	MerchantID    *int32 `json:"merchant_id,omitempty"`
	Nickname      string `json:"nickname"`
}
