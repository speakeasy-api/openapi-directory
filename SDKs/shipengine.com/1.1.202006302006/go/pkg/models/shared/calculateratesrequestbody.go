package shared

// CalculateRatesRequestBody
// A rate shipment request body
type CalculateRatesRequestBody struct {
	RateOptions *RateRequestBody `json:"rate_options,omitempty"`
}
