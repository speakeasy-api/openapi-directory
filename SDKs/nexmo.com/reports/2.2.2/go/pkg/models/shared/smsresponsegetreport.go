package shared

import (
	"time"
)

// SmsResponseGetReport
// SMS
type SmsResponseGetReport struct {
	Links              *Links             `json:"_links,omitempty"`
	AccountID          string             `json:"account_id"`
	AccountRef         *string            `json:"account_ref,omitempty"`
	CallbackURL        *string            `json:"callback_url,omitempty"`
	ClientRef          *string            `json:"client_ref,omitempty"`
	DateEnd            *time.Time         `json:"date_end,omitempty"`
	DateStart          *time.Time         `json:"date_start,omitempty"`
	Direction          DirectionEnum      `json:"direction"`
	From               *string            `json:"from,omitempty"`
	IncludeMessage     *bool              `json:"include_message,omitempty"`
	IncludeSubaccounts *bool              `json:"include_subaccounts,omitempty"`
	ItemsCount         *int64             `json:"items_count,omitempty"`
	Network            *string            `json:"network,omitempty"`
	Product            ProductSmsEnum     `json:"product"`
	ReceiveTime        *time.Time         `json:"receive_time,omitempty"`
	RequestID          *string            `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusEnum `json:"request_status,omitempty"`
	ShowConcatenated   *bool              `json:"show_concatenated,omitempty"`
	StartTime          *time.Time         `json:"start_time,omitempty"`
	Status             *SmsStatusEnum     `json:"status,omitempty"`
	To                 *string            `json:"to,omitempty"`
}
