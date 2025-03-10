package shared

import (
	"time"
)

type NumberInsightResponseCreateReport struct {
	Links              *LinksCreateReport             `json:"_links"`
	AccountID          *string                        `json:"account_id"`
	CallbackURL        *string                        `json:"callback_url"`
	DateEnd            *time.Time                     `json:"date_end"`
	DateStart          *time.Time                     `json:"date_start"`
	IncludeSubaccounts *bool                          `json:"include_subaccounts"`
	Network            *string                        `json:"network"`
	Number             *string                        `json:"number"`
	Product            *ProductNiEnum                 `json:"product"`
	ReceiveTime        *time.Time                     `json:"receive_time"`
	RequestID          *string                        `json:"request_id"`
	RequestStatus      *RequestStatusCreateReportEnum `json:"request_status"`
	StartTime          *time.Time                     `json:"start_time"`
}
