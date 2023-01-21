package shared

// V1Beta1ConsumerQuotaMetric
// Consumer quota settings for a quota metric.
type V1Beta1ConsumerQuotaMetric struct {
	ConsumerQuotaLimits           []V1Beta1ConsumerQuotaLimit `json:"consumerQuotaLimits,omitempty"`
	DescendantConsumerQuotaLimits []V1Beta1ConsumerQuotaLimit `json:"descendantConsumerQuotaLimits,omitempty"`
	DisplayName                   *string                     `json:"displayName,omitempty"`
	Metric                        *string                     `json:"metric,omitempty"`
	Name                          *string                     `json:"name,omitempty"`
	Unit                          *string                     `json:"unit,omitempty"`
}
