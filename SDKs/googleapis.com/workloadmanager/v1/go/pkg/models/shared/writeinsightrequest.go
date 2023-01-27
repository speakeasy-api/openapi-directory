package shared

// WriteInsightRequestInput
// Request for sending the data insights.
type WriteInsightRequestInput struct {
	Insight   *InsightInput `json:"insight,omitempty"`
	RequestID *string       `json:"requestId,omitempty"`
}
