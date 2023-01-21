package shared

// GiftCardActivityImportReversal
// Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER
type GiftCardActivityImportReversal struct {
	AmountMoney Money `json:"amount_money"`
}
