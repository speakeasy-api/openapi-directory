package shared

// WorkerThreadScalingReport
// Contains information about the thread scaling information of a worker.
type WorkerThreadScalingReport struct {
	CurrentThreadCount *int32 `json:"currentThreadCount,omitempty"`
}
