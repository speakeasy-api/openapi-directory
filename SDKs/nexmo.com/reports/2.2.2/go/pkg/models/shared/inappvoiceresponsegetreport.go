package shared

import (
	"time"
)

// InAppVoiceResponseGetReport
// In App Voice
type InAppVoiceResponseGetReport struct {
	Links              *Links                 `json:"_links,omitempty"`
	AccountID          *string                `json:"account_id,omitempty"`
	CallbackURL        *string                `json:"callback_url,omitempty"`
	ConversationID     *string                `json:"conversation_id,omitempty"`
	DateEnd            *time.Time             `json:"date_end,omitempty"`
	DateStart          *time.Time             `json:"date_start,omitempty"`
	IncludeSubaccounts *bool                  `json:"include_subaccounts,omitempty"`
	ItemsCount         *int64                 `json:"items_count,omitempty"`
	Product            *ProductInAppVoiceEnum `json:"product,omitempty"`
	ReceiveTime        *time.Time             `json:"receive_time,omitempty"`
	RequestID          *string                `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusEnum     `json:"request_status,omitempty"`
	StartTime          *time.Time             `json:"start_time,omitempty"`
}
