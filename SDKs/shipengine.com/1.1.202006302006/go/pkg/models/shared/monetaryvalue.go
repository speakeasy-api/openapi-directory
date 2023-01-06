package shared

// MonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type MonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}
