package shared

// DigitalWalletDetails
// Additional details about `WALLET` type payments. Contains only non-confidential information.
type DigitalWalletDetails struct {
	Status *string `json:"status,omitempty"`
}
