package shared

type AsyncOperationStatus struct {
	Duration *int64                        `json:"duration,omitempty"`
	Key      *string                       `json:"key,omitempty"`
	Message  map[string]interface{}        `json:"message,omitempty"`
	Status   *AsyncOperationStatusEnumEnum `json:"status,omitempty"`
}
