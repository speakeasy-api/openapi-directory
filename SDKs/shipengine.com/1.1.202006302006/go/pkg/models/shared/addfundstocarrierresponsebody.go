package shared

// AddFundsToCarrierResponseBodyMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type AddFundsToCarrierResponseBodyMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// AddFundsToCarrierResponseBody
// The current balance of the requested carrier account
type AddFundsToCarrierResponseBody struct {
	Balance AddFundsToCarrierResponseBodyMonetaryValue `json:"balance"`
}
