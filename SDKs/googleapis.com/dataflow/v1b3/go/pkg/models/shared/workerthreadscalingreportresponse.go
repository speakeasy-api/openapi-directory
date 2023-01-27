package shared

// WorkerThreadScalingReportResponse
// Contains the thread scaling recommendation for a worker from the backend.
type WorkerThreadScalingReportResponse struct {
	RecommendedThreadCount *int32 `json:"recommendedThreadCount,omitempty"`
}
