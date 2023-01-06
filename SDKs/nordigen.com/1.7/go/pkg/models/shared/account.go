package shared

import (
	"time"
)

// Account
// The representation of a bank account.
type Account struct {
	AspspIdentifier string                 `json:"aspsp_identifier"`
	Created         time.Time              `json:"created"`
	Iban            string                 `json:"iban"`
	ID              string                 `json:"id"`
	LastAccessed    time.Time              `json:"last_accessed"`
	Status          map[string]interface{} `json:"status"`
}
