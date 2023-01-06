package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraServerProjects401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjects403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsResponse struct {
	ContentType                                               string
	JiraProjects                                              []shared.JiraProject
	StatusCode                                                int64
	GetIntegrationsJiraServerProjects401ApplicationJSONObject *GetIntegrationsJiraServerProjects401ApplicationJSON
	GetIntegrationsJiraServerProjects403ApplicationJSONObject *GetIntegrationsJiraServerProjects403ApplicationJSON
}
