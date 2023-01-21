package shared

type DeliveryReceipt struct {
	APIKey           *string `json:"api-key,omitempty"`
	ClientRef        *string `json:"client-ref,omitempty"`
	ErrCode          *string `json:"err-code,omitempty"`
	MessageTimestamp *string `json:"message-timestamp,omitempty"`
	MessageID        *string `json:"messageId,omitempty"`
	Msisdn           *string `json:"msisdn,omitempty"`
	NetworkCode      *string `json:"network-code,omitempty"`
	Nonce            *string `json:"nonce,omitempty"`
	Price            *string `json:"price,omitempty"`
	Scts             *string `json:"scts,omitempty"`
	Sig              *string `json:"sig,omitempty"`
	Status           *string `json:"status,omitempty"`
	Timestamp        *string `json:"timestamp,omitempty"`
	To               *string `json:"to,omitempty"`
}
