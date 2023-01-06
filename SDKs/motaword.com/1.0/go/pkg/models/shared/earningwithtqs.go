package shared

import (
	"time"
)

type EarningWithTqsStatusEnum string

const (
	EarningWithTQSStatusEnumPaid    EarningWithTqsStatusEnum = "paid"
	EarningWithTQSStatusEnumPending EarningWithTqsStatusEnum = "pending"
	EarningWithTQSStatusEnumFailed  EarningWithTqsStatusEnum = "failed"
)

type EarningWithTqs struct {
	Amount          *float32                  `json:"amount,omitempty"`
	Currency        *string                   `json:"currency,omitempty"`
	DueDate         *time.Time                `json:"due_date,omitempty"`
	Status          *EarningWithTqsStatusEnum `json:"status,omitempty"`
	Words           *int64                    `json:"words,omitempty"`
	WordsApproved   *int64                    `json:"words_approved,omitempty"`
	WordsTranslated *int64                    `json:"words_translated,omitempty"`
}
