package shared

import (
	"time"
)

type ReportFilter struct {
	BudgetCode      *string    `json:"budget_code,omitempty"`
	DateFrom        *time.Time `json:"date_from,omitempty"`
	DateTo          *time.Time `json:"date_to,omitempty"`
	SourceLanguages []string   `json:"source_languages,omitempty"`
	TargetLanguages []string   `json:"target_languages,omitempty"`
	Users           []int64    `json:"users,omitempty"`
}
