package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDIntegrationsJiraServerPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsJiraServerRequest struct {
	PathParams GetTargetsTargetIDIntegrationsJiraServerPathParams
}

type GetTargetsTargetIDIntegrationsJiraServerResponse struct {
	ContentType                                                      string
	JiraScope                                                        *shared.JiraScope
	StatusCode                                                       int64
	GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject *GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
	GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject *GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
}
