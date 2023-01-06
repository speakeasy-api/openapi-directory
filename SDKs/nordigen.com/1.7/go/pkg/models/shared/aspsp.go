package shared

// Aspsp
// Represents an ASPSP.
type Aspsp struct {
	Bic                  *string  `json:"bic,omitempty"`
	Countries            []string `json:"countries"`
	ID                   string   `json:"id"`
	Logo                 string   `json:"logo"`
	Name                 string   `json:"name"`
	TransactionTotalDays *string  `json:"transaction_total_days,omitempty"`
}
