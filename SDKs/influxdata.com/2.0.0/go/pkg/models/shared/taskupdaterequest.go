package shared

type TaskUpdateRequest struct {
	Cron        *string             `json:"cron,omitempty"`
	Description *string             `json:"description,omitempty"`
	Every       *string             `json:"every,omitempty"`
	Flux        *string             `json:"flux,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Offset      *string             `json:"offset,omitempty"`
	Status      *TaskStatusTypeEnum `json:"status,omitempty"`
}
