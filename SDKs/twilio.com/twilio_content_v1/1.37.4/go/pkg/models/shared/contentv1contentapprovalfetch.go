package shared

type ContentV1ContentApprovalFetch struct {
	AccountSid *string      `json:"account_sid,omitempty"`
	Sid        *string      `json:"sid,omitempty"`
	URL        *string      `json:"url,omitempty"`
	Whatsapp   *interface{} `json:"whatsapp,omitempty"`
}
