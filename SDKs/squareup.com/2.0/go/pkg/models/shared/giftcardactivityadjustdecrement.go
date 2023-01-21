package shared

// GiftCardActivityAdjustDecrement
// Describes a gift card activity of the ADJUST_DECREMENT type.
type GiftCardActivityAdjustDecrement struct {
	AmountMoney Money       `json:"amount_money"`
	Reason      interface{} `json:"reason"`
}
