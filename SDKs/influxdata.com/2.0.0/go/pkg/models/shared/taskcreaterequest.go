package shared

type TaskCreateRequest struct {
	Description *string             `json:"description,omitempty"`
	Flux        string              `json:"flux"`
	Org         *string             `json:"org,omitempty"`
	OrgID       *string             `json:"orgID,omitempty"`
	Status      *TaskStatusTypeEnum `json:"status,omitempty"`
}
