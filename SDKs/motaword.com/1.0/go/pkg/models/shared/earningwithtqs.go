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
	Amount            *float32                  `json:"amount,omitempty"`
	Currency          *string                   `json:"currency,omitempty"`
	DueDate           *time.Time                `json:"due_date,omitempty"`
	IsAboveAverage    *bool                     `json:"is_above_average,omitempty"`
	ProjectID         *int64                    `json:"project_id,omitempty"`
	Score             *float32                  `json:"score,omitempty"`
	Status            *EarningWithTqsStatusEnum `json:"status,omitempty"`
	StringsEdited     *int64                    `json:"strings_edited,omitempty"`
	StringsTranslated *int64                    `json:"strings_translated,omitempty"`
	Words             *int64                    `json:"words,omitempty"`
	WordsApproved     *int64                    `json:"words_approved,omitempty"`
	WordsTranslated   *int64                    `json:"words_translated,omitempty"`
}
