package shared

type CreditCard struct {
	Bin         *string `json:"bin,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	PaymentCode *string `json:"payment_code,omitempty"`
}
