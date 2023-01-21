package shared

// GiftCardActivityImport
// Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
// (a third-party gift card).
type GiftCardActivityImport struct {
	AmountMoney Money `json:"amount_money"`
}
