package shared

import (
	"time"
)

// RatesInformationRateMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type RatesInformationRateMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// RatesInformationRate
// A rate
type RatesInformationRate struct {
	CarrierCode           string                             `json:"carrier_code"`
	CarrierDeliveryDays   *string                            `json:"carrier_delivery_days,omitempty"`
	CarrierFriendlyName   string                             `json:"carrier_friendly_name"`
	CarrierID             map[string]interface{}             `json:"carrier_id"`
	CarrierNickname       string                             `json:"carrier_nickname"`
	ConfirmationAmount    RatesInformationRateMonetaryValue  `json:"confirmation_amount"`
	DeliveryDays          *int32                             `json:"delivery_days,omitempty"`
	ErrorMessages         []string                           `json:"error_messages"`
	EstimatedDeliveryDate map[string]interface{}             `json:"estimated_delivery_date,omitempty"`
	GuaranteedService     bool                               `json:"guaranteed_service"`
	InsuranceAmount       RatesInformationRateMonetaryValue  `json:"insurance_amount"`
	NegotiatedRate        bool                               `json:"negotiated_rate"`
	OtherAmount           RatesInformationRateMonetaryValue  `json:"other_amount"`
	PackageType           string                             `json:"package_type"`
	RateID                map[string]interface{}             `json:"rate_id"`
	RateType              map[string]interface{}             `json:"rate_type"`
	ServiceCode           string                             `json:"service_code"`
	ServiceType           string                             `json:"service_type"`
	ShipDate              *time.Time                         `json:"ship_date,omitempty"`
	ShippingAmount        RatesInformationRateMonetaryValue  `json:"shipping_amount"`
	TaxAmount             *RatesInformationRateMonetaryValue `json:"tax_amount,omitempty"`
	Trackable             bool                               `json:"trackable"`
	ValidationStatus      map[string]interface{}             `json:"validation_status"`
	WarningMessages       []string                           `json:"warning_messages"`
	Zone                  int32                              `json:"zone"`
}

// RatesInformation
// A rates information resource
type RatesInformation struct {
	CreatedAt     map[string]interface{} `json:"created_at,omitempty"`
	Errors        []Error                `json:"errors,omitempty"`
	InvalidRates  []RatesInformationRate `json:"invalid_rates,omitempty"`
	RateRequestID map[string]interface{} `json:"rate_request_id,omitempty"`
	Rates         []RatesInformationRate `json:"rates,omitempty"`
	ShipmentID    map[string]interface{} `json:"shipment_id,omitempty"`
	Status        map[string]interface{} `json:"status,omitempty"`
}
