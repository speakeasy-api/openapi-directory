package shared

type JiraScope struct {
	AllowJira       *bool                `json:"allow_jira,omitempty"`
	AutoSync        *bool                `json:"auto_sync,omitempty"`
	IssueTypeID     *string              `json:"issue_type_id,omitempty"`
	PriorityMapping *JiraPriorityMapping `json:"priority_mapping,omitempty"`
	ProjectID       *string              `json:"project_id,omitempty"`
	StatusMapping   *JiraStatusMapping   `json:"status_mapping,omitempty"`
}
