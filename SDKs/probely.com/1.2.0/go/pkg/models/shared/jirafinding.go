package shared

type JiraFinding struct {
	IssueID       *string `json:"issue_id,omitempty"`
	SelectiveSync *bool   `json:"selective_sync,omitempty"`
}
