package shared

// GiftCardActivityUnblock
// Present only when `GiftCardActivityType` is UNBLOCK.
type GiftCardActivityUnblock struct {
	Reason interface{} `json:"reason"`
}
