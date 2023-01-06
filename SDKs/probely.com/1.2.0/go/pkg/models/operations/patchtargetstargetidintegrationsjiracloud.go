package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDIntegrationsJiraCloudPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraCloudRequest struct {
	PathParams PatchTargetsTargetIDIntegrationsJiraCloudPathParams
	Request    shared.JiraScope `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDIntegrationsJiraCloudResponse struct {
	ContentType                                                       string
	JiraScope                                                         *shared.JiraScope
	StatusCode                                                        int64
	PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
	PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
	PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON
}
