package shared

import (
	"time"
)

// VerifyAPIResponseGetReport
// Verify
type VerifyAPIResponseGetReport struct {
	Links              *Links             `json:"_links,omitempty"`
	AccountID          *string            `json:"account_id,omitempty"`
	CallbackURL        *string            `json:"callback_url,omitempty"`
	DateEnd            *time.Time         `json:"date_end,omitempty"`
	DateStart          *time.Time         `json:"date_start,omitempty"`
	IncludeSubaccounts *bool              `json:"include_subaccounts,omitempty"`
	ItemsCount         *int64             `json:"items_count,omitempty"`
	Network            *string            `json:"network,omitempty"`
	Product            *ProductVerifyEnum `json:"product,omitempty"`
	ReceiveTime        *time.Time         `json:"receive_time,omitempty"`
	RequestID          *string            `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusEnum `json:"request_status,omitempty"`
	StartTime          *time.Time         `json:"start_time,omitempty"`
	To                 *string            `json:"to,omitempty"`
}
