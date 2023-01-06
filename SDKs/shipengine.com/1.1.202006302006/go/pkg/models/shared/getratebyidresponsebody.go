package shared

import (
	"time"
)

// GetRateByIDResponseBodyMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type GetRateByIDResponseBodyMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// GetRateByIDResponseBody
// A rate
type GetRateByIDResponseBody struct {
	CarrierCode           string                                `json:"carrier_code"`
	CarrierDeliveryDays   *string                               `json:"carrier_delivery_days,omitempty"`
	CarrierFriendlyName   string                                `json:"carrier_friendly_name"`
	CarrierID             map[string]interface{}                `json:"carrier_id"`
	CarrierNickname       string                                `json:"carrier_nickname"`
	ConfirmationAmount    GetRateByIDResponseBodyMonetaryValue  `json:"confirmation_amount"`
	DeliveryDays          *int32                                `json:"delivery_days,omitempty"`
	ErrorMessages         []string                              `json:"error_messages"`
	EstimatedDeliveryDate map[string]interface{}                `json:"estimated_delivery_date,omitempty"`
	GuaranteedService     bool                                  `json:"guaranteed_service"`
	InsuranceAmount       GetRateByIDResponseBodyMonetaryValue  `json:"insurance_amount"`
	NegotiatedRate        bool                                  `json:"negotiated_rate"`
	OtherAmount           GetRateByIDResponseBodyMonetaryValue  `json:"other_amount"`
	PackageType           string                                `json:"package_type"`
	RateID                map[string]interface{}                `json:"rate_id"`
	RateType              map[string]interface{}                `json:"rate_type"`
	ServiceCode           string                                `json:"service_code"`
	ServiceType           string                                `json:"service_type"`
	ShipDate              *time.Time                            `json:"ship_date,omitempty"`
	ShippingAmount        GetRateByIDResponseBodyMonetaryValue  `json:"shipping_amount"`
	TaxAmount             *GetRateByIDResponseBodyMonetaryValue `json:"tax_amount,omitempty"`
	Trackable             bool                                  `json:"trackable"`
	ValidationStatus      map[string]interface{}                `json:"validation_status"`
	WarningMessages       []string                              `json:"warning_messages"`
	Zone                  int32                                 `json:"zone"`
}
