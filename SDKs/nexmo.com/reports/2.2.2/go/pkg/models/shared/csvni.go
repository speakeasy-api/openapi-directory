package shared

import (
	"time"
)

// CsvNi
// Number Insight
type CsvNi struct {
	AccountID    *string    `json:"account_id,omitempty"`
	Country      *string    `json:"country,omitempty"`
	CountryName  *string    `json:"country_name,omitempty"`
	Currency     *string    `json:"currency,omitempty"`
	DateReceived *time.Time `json:"date_received,omitempty"`
	FirstName    *string    `json:"first_name,omitempty"`
	LastName     *string    `json:"last_name,omitempty"`
	Network      *string    `json:"network,omitempty"`
	NetworkName  *string    `json:"network_name,omitempty"`
	NetworkType  *string    `json:"network_type,omitempty"`
	Number       *string    `json:"number,omitempty"`
	Ported       *string    `json:"ported,omitempty"`
	ProductType  *string    `json:"product_type,omitempty"`
	Reachable    *string    `json:"reachable,omitempty"`
	RequestID    *string    `json:"request_id,omitempty"`
	ResponseCode *string    `json:"response_code,omitempty"`
	Status       *string    `json:"status,omitempty"`
	TotalPrice   *float64   `json:"total_price,omitempty"`
	Valid        *string    `json:"valid,omitempty"`
}
