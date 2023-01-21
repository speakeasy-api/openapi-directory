package shared

// GoogleAnalyticsAdminV1alphaBigQueryLink
// A link between a GA4 Property and BigQuery project.
type GoogleAnalyticsAdminV1alphaBigQueryLink struct {
	CreateTime             *string  `json:"createTime,omitempty"`
	DailyExportEnabled     *bool    `json:"dailyExportEnabled,omitempty"`
	ExcludedEvents         []string `json:"excludedEvents,omitempty"`
	ExportStreams          []string `json:"exportStreams,omitempty"`
	IncludeAdvertisingID   *bool    `json:"includeAdvertisingId,omitempty"`
	Name                   *string  `json:"name,omitempty"`
	Project                *string  `json:"project,omitempty"`
	StreamingExportEnabled *bool    `json:"streamingExportEnabled,omitempty"`
}
