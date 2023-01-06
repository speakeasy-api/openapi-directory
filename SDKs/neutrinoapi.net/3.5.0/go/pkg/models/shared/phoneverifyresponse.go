package shared

type PhoneVerifyResponse struct {
	Calling      bool   `json:"calling"`
	NumberValid  bool   `json:"numberValid"`
	SecurityCode string `json:"securityCode"`
}
