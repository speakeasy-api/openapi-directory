package shared

// GiftCardActivityAdjustIncrement
// Describes a gift card activity of the ADJUST_INCREMENT type.
type GiftCardActivityAdjustIncrement struct {
	AmountMoney Money       `json:"amount_money"`
	Reason      interface{} `json:"reason"`
}
