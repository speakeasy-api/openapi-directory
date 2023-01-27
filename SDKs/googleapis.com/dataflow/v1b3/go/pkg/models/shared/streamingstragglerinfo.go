package shared

// StreamingStragglerInfo
// Information useful for streaming straggler identification and debugging.
type StreamingStragglerInfo struct {
	DataWatermarkLag   *string `json:"dataWatermarkLag,omitempty"`
	EndTime            *string `json:"endTime,omitempty"`
	StartTime          *string `json:"startTime,omitempty"`
	SystemWatermarkLag *string `json:"systemWatermarkLag,omitempty"`
	WorkerName         *string `json:"workerName,omitempty"`
}
