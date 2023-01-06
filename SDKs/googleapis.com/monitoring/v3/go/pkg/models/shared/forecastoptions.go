package shared

// ForecastOptions
// Options used when forecasting the time series and testing the predicted value against the threshold.
type ForecastOptions struct {
	ForecastHorizon *string `json:"forecastHorizon,omitempty"`
}
