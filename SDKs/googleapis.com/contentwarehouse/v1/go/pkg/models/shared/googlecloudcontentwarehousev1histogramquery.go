package shared

// GoogleCloudContentwarehouseV1HistogramQuery
// The histogram request.
type GoogleCloudContentwarehouseV1HistogramQuery struct {
	Filters                  *GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilter `json:"filters,omitempty"`
	HistogramQuery           *string                                                        `json:"histogramQuery,omitempty"`
	RequirePreciseResultSize *bool                                                          `json:"requirePreciseResultSize,omitempty"`
}
