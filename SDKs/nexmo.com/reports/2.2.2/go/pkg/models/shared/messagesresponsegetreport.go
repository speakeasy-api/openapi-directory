package shared

import (
	"time"
)

// MessagesResponseGetReport
// Messages
type MessagesResponseGetReport struct {
	Links              *Links              `json:"_links,omitempty"`
	AccountID          string              `json:"account_id"`
	CallbackURL        *string             `json:"callback_url,omitempty"`
	DateEnd            *time.Time          `json:"date_end,omitempty"`
	DateStart          *time.Time          `json:"date_start,omitempty"`
	Direction          DirectionEnum       `json:"direction"`
	From               *string             `json:"from,omitempty"`
	ID                 *string             `json:"id,omitempty"`
	IncludeMessage     *bool               `json:"include_message,omitempty"`
	IncludeSubaccounts *bool               `json:"include_subaccounts,omitempty"`
	ItemsCount         *int64              `json:"items_count,omitempty"`
	Product            ProductMessagesEnum `json:"product"`
	ReceiveTime        *time.Time          `json:"receive_time,omitempty"`
	RequestID          *string             `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusEnum  `json:"request_status,omitempty"`
	StartTime          *time.Time          `json:"start_time,omitempty"`
	To                 *string             `json:"to,omitempty"`
}
