package shared

type PaymentAmount struct {
	Amount   *float64      `json:"amount,omitempty"`
	Currency *CurrencyEnum `json:"currency,omitempty"`
}
