package shared

type FileNeedsVendor struct {
	FileID         *int64   `json:"fileId,omitempty"`
	ProjectID      *int64   `json:"projectId,omitempty"`
	Reason         *string  `json:"reason,omitempty"`
	TargetLanguage []string `json:"targetLanguage,omitempty"`
	TaskType       []string `json:"taskType,omitempty"`
}
