package shared

type SmsMessageResponse struct {
	NumberValid bool `json:"numberValid"`
	Sent        bool `json:"sent"`
}
