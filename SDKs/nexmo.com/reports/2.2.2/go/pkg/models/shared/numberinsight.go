package shared

import (
	"time"
)

// NumberInsight
// Number Insight
type NumberInsight struct {
	AccountID          string        `json:"account_id"`
	CallbackURL        *string       `json:"callback_url,omitempty"`
	DateEnd            *time.Time    `json:"date_end,omitempty"`
	DateStart          *time.Time    `json:"date_start,omitempty"`
	IncludeSubaccounts *bool         `json:"include_subaccounts,omitempty"`
	Network            *string       `json:"network,omitempty"`
	Number             *string       `json:"number,omitempty"`
	Product            ProductNiEnum `json:"product"`
}
