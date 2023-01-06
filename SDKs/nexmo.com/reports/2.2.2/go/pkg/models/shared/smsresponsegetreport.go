package shared

// SmsResponseGetReport
// SMS
type SmsResponseGetReport struct {
	AccountRef       *string        `json:"account_ref,omitempty"`
	ClientRef        *string        `json:"client_ref,omitempty"`
	Direction        DirectionEnum  `json:"direction"`
	From             *string        `json:"from,omitempty"`
	IncludeMessage   *bool          `json:"include_message,omitempty"`
	Network          *string        `json:"network,omitempty"`
	Product          ProductSmsEnum `json:"product"`
	ShowConcatenated *bool          `json:"show_concatenated,omitempty"`
	Status           *SmsStatusEnum `json:"status,omitempty"`
	To               *string        `json:"to,omitempty"`
}
