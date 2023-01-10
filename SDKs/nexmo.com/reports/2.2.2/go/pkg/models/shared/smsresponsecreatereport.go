package shared

import (
	"time"
)

// SmsResponseCreateReport
// SMS
type SmsResponseCreateReport struct {
	Links              *LinksCreateReport             `json:"_links,omitempty"`
	AccountID          string                         `json:"account_id"`
	AccountRef         *string                        `json:"account_ref,omitempty"`
	CallbackURL        *string                        `json:"callback_url,omitempty"`
	ClientRef          *string                        `json:"client_ref,omitempty"`
	DateEnd            *time.Time                     `json:"date_end,omitempty"`
	DateStart          *time.Time                     `json:"date_start,omitempty"`
	Direction          DirectionEnum                  `json:"direction"`
	From               *string                        `json:"from,omitempty"`
	IncludeMessage     *bool                          `json:"include_message,omitempty"`
	IncludeSubaccounts *bool                          `json:"include_subaccounts,omitempty"`
	Network            *string                        `json:"network,omitempty"`
	Product            ProductSmsEnum                 `json:"product"`
	ReceiveTime        *time.Time                     `json:"receive_time,omitempty"`
	RequestID          *string                        `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusCreateReportEnum `json:"request_status,omitempty"`
	ShowConcatenated   *bool                          `json:"show_concatenated,omitempty"`
	StartTime          *time.Time                     `json:"start_time,omitempty"`
	Status             *SmsStatusEnum                 `json:"status,omitempty"`
	To                 *string                        `json:"to,omitempty"`
}
