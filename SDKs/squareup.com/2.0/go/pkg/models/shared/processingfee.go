package shared

// ProcessingFee
// Represents the Square processing fee.
type ProcessingFee struct {
	AmountMoney *Money  `json:"amount_money,omitempty"`
	EffectiveAt *string `json:"effective_at,omitempty"`
	Type        *string `json:"type,omitempty"`
}
