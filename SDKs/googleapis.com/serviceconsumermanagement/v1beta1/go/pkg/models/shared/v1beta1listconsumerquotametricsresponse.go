package shared

// V1Beta1ListConsumerQuotaMetricsResponse
// Response message for ListConsumerQuotaMetrics.
type V1Beta1ListConsumerQuotaMetricsResponse struct {
	Metrics       []V1Beta1ConsumerQuotaMetric `json:"metrics,omitempty"`
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
}
