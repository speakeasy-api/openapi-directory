package shared

// OrderRoundingAdjustment
// A rounding adjustment of the money being returned. Commonly used to apply cash rounding
// when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
type OrderRoundingAdjustment struct {
	AmountMoney *Money  `json:"amount_money,omitempty"`
	Name        *string `json:"name,omitempty"`
	UID         *string `json:"uid,omitempty"`
}
