package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDIntegrationsJiraServerPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsJiraServerRequest struct {
	PathParams PatchTargetsTargetIDIntegrationsJiraServerPathParams
	Request    shared.JiraScope `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDIntegrationsJiraServerResponse struct {
	ContentType                                                        string
	JiraScope                                                          *shared.JiraScope
	StatusCode                                                         int64
	PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
	PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
	PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSONObject *PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON
}
