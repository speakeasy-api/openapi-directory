package shared

import (
	"time"
)

// InAppVoiceResponseCreateReport
// In App Voice
type InAppVoiceResponseCreateReport struct {
	Links              *LinksCreateReport             `json:"_links,omitempty"`
	AccountID          *string                        `json:"account_id,omitempty"`
	CallbackURL        *string                        `json:"callback_url,omitempty"`
	ConversationID     *string                        `json:"conversation_id,omitempty"`
	DateEnd            *time.Time                     `json:"date_end,omitempty"`
	DateStart          *time.Time                     `json:"date_start,omitempty"`
	IncludeSubaccounts *bool                          `json:"include_subaccounts,omitempty"`
	Product            *ProductInAppVoiceEnum         `json:"product,omitempty"`
	ReceiveTime        *time.Time                     `json:"receive_time,omitempty"`
	RequestID          *string                        `json:"request_id,omitempty"`
	RequestStatus      *RequestStatusCreateReportEnum `json:"request_status,omitempty"`
	StartTime          *time.Time                     `json:"start_time,omitempty"`
}
