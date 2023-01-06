package shared

// CalculateRatesResponseBody
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type CalculateRatesResponseBody struct {
	RateResponse RatesInformation `json:"rate_response"`
}
