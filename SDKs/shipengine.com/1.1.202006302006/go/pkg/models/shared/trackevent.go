package shared

import (
	"time"
)

// TrackEvent
// A track event
type TrackEvent struct {
	CarrierOccurredAt *time.Time `json:"carrier_occurred_at,omitempty"`
	CityLocality      string     `json:"city_locality"`
	CompanyName       *string    `json:"company_name,omitempty"`
	CountryCode       *string    `json:"country_code,omitempty"`
	Description       *string    `json:"description,omitempty"`
	EventCode         *string    `json:"event_code,omitempty"`
	Latitude          *float64   `json:"latitude,omitempty"`
	Longitude         *float64   `json:"longitude,omitempty"`
	OccurredAt        time.Time  `json:"occurred_at"`
	PostalCode        string     `json:"postal_code"`
	Signer            *string    `json:"signer,omitempty"`
	StateProvince     string     `json:"state_province"`
}
