package shared

type FindingUpdateInput struct {
	Assignee *Assignee            `json:"assignee,omitempty"`
	Comment  *string              `json:"comment,omitempty"`
	Labels   []string             `json:"labels,omitempty"`
	Severity *FindingSeverityEnum `json:"severity,omitempty"`
	State    *FindingStateEnum    `json:"state,omitempty"`
}
