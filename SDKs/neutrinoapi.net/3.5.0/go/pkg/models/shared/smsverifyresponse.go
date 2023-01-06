package shared

type SmsVerifyResponse struct {
	NumberValid  bool   `json:"numberValid"`
	SecurityCode string `json:"securityCode"`
	Sent         bool   `json:"sent"`
}
