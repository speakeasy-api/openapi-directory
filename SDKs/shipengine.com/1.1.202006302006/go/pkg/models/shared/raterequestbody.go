package shared

// RateRequestBody
// A rate request body
type RateRequestBody struct {
	CalculateTaxAmount *bool         `json:"calculate_tax_amount,omitempty"`
	CarrierIds         []string      `json:"carrier_ids"`
	PackageTypes       []string      `json:"package_types,omitempty"`
	PreferredCurrency  *CurrencyEnum `json:"preferred_currency,omitempty"`
	ServiceCodes       []string      `json:"service_codes,omitempty"`
}
