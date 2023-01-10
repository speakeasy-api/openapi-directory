package shared

import (
	"time"
)

// AsrResponseCreateReport
// ASR
type AsrResponseCreateReport struct {
	Links              *LinksCreateReport             `json:"_links,omitempty"`
	AccountID          *string                        `json:"account_id,omitempty"`
	CallbackURL        *string                        `json:"callback_url,omitempty"`
	DateEnd            *time.Time                     `json:"date_end,omitempty"`
	DateStart          *time.Time                     `json:"date_start,omitempty"`
	Direction          *DirectionEnum                 `json:"direction,omitempty"`
	From               *string                        `json:"from,omitempty"`
	IncludeSubaccounts *bool                          `json:"include_subaccounts,omitempty"`
	Product            *ProductAsrEnum                `json:"product,omitempty"`
	ReceiveTime        *time.Time                     `json:"receive_time,omitempty"`
	RequestID          *string                        `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusCreateReportEnum `json:"request_status,omitempty"`
	StartTime          *time.Time                     `json:"start_time,omitempty"`
	Status             *AsrStatusEnum                 `json:"status,omitempty"`
	To                 *string                        `json:"to,omitempty"`
}
