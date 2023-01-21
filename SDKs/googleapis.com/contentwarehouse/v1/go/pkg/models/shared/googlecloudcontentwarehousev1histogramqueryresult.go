package shared

// GoogleCloudContentwarehouseV1HistogramQueryResult
// Histogram result that matches HistogramQuery specified in searches.
type GoogleCloudContentwarehouseV1HistogramQueryResult struct {
	Histogram      map[string]string `json:"histogram,omitempty"`
	HistogramQuery *string           `json:"histogramQuery,omitempty"`
}
