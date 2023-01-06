package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDIntegrationsJiraCloudPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsJiraCloudRequest struct {
	PathParams GetTargetsTargetIDIntegrationsJiraCloudPathParams
}

type GetTargetsTargetIDIntegrationsJiraCloudResponse struct {
	ContentType                                                     string
	JiraScope                                                       *shared.JiraScope
	StatusCode                                                      int64
	GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject *GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
	GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject *GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
}
