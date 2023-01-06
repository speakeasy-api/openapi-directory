package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraCloudProjects401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjects403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsResponse struct {
	ContentType                                              string
	JiraProjects                                             []shared.JiraProject
	StatusCode                                               int64
	GetIntegrationsJiraCloudProjects401ApplicationJSONObject *GetIntegrationsJiraCloudProjects401ApplicationJSON
	GetIntegrationsJiraCloudProjects403ApplicationJSONObject *GetIntegrationsJiraCloudProjects403ApplicationJSON
}
