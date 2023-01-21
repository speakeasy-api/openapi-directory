package shared

// V1Beta1ConsumerQuotaLimit
// Consumer quota settings for a quota limit.
type V1Beta1ConsumerQuotaLimit struct {
	IsPrecise          *bool                `json:"isPrecise,omitempty"`
	Metric             *string              `json:"metric,omitempty"`
	Name               *string              `json:"name,omitempty"`
	QuotaBuckets       []V1Beta1QuotaBucket `json:"quotaBuckets,omitempty"`
	SupportedLocations []string             `json:"supportedLocations,omitempty"`
	Unit               *string              `json:"unit,omitempty"`
}
