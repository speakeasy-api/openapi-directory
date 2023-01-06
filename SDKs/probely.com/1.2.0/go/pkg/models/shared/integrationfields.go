package shared

type IntegrationFields struct {
	Heroku     *bool `json:"heroku,omitempty"`
	JiraCloud  *bool `json:"jira_cloud,omitempty"`
	JiraServer *bool `json:"jira_server,omitempty"`
	Slack      *bool `json:"slack,omitempty"`
}
