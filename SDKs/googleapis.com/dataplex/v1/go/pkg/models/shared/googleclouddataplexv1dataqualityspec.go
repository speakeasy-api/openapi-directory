// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDataplexV1DataQualitySpec - DataQualityScan related setting.
type GoogleCloudDataplexV1DataQualitySpec struct {
	// Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
	RowFilter *string `json:"rowFilter,omitempty"`
	// The list of rules to evaluate against a data source. At least one rule is required.
	Rules []GoogleCloudDataplexV1DataQualityRule `json:"rules,omitempty"`
	// Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100.
	SamplingPercent *float32 `json:"samplingPercent,omitempty"`
}
