package shared

import (
	"time"
)

// CsvVerify
// Verify
type CsvVerify struct {
	AccountID      *string    `json:"account_id,omitempty"`
	Country        *string    `json:"country,omitempty"`
	CountryName    *string    `json:"country_name,omitempty"`
	Currency       *string    `json:"currency,omitempty"`
	DateFinalized  *time.Time `json:"date_finalized,omitempty"`
	DateReceived   *time.Time `json:"date_received,omitempty"`
	EstimatedPrice *string    `json:"estimated_price,omitempty"`
	FirstEventDate *time.Time `json:"first_event_date,omitempty"`
	From           *string    `json:"from,omitempty"`
	LastEventDate  *time.Time `json:"last_event_date,omitempty"`
	Locale         *string    `json:"locale,omitempty"`
	Network        *string    `json:"network,omitempty"`
	NetworkName    *string    `json:"network_name,omitempty"`
	NumberType     *string    `json:"number_type,omitempty"`
	Price          *float64   `json:"price,omitempty"`
	PricingModel   *string    `json:"pricing_model,omitempty"`
	RequestID      *string    `json:"request_id,omitempty"`
	SmsEventCount  *int64     `json:"sms_event_count,omitempty"`
	To             *string    `json:"to,omitempty"`
	TtsEventCount  *int64     `json:"tts_event_count,omitempty"`
	VerifyStatus   *string    `json:"verify_status,omitempty"`
}
