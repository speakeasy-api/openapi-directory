package shared

type GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnum string

const (
	GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnumHistogramYaxisDocument GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnum = "HISTOGRAM_YAXIS_DOCUMENT"
	GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnumHistogramYaxisProperty GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnum = "HISTOGRAM_YAXIS_PROPERTY"
)

type GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilter struct {
	DocumentSchemas []string                                                                `json:"documentSchemas,omitempty"`
	PropertyNames   []string                                                                `json:"propertyNames,omitempty"`
	YAxis           *GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilterYAxisEnum `json:"yAxis,omitempty"`
}
