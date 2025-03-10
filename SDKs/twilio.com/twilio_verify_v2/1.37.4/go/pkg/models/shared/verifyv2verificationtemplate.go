package shared

type VerifyV2VerificationTemplate struct {
	AccountSid   *string      `json:"account_sid,omitempty"`
	Channels     []string     `json:"channels,omitempty"`
	FriendlyName *string      `json:"friendly_name,omitempty"`
	Sid          *string      `json:"sid,omitempty"`
	Translations *interface{} `json:"translations,omitempty"`
}
