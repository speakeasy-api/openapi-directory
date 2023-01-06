package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDSitePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDSite400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDSite401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDSite403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDSite404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDSiteRequest struct {
	PathParams PatchTargetsTargetIDSitePathParams
	Request    shared.SiteInput `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDSiteResponse struct {
	ContentType                                      string
	Site                                             *shared.Site
	StatusCode                                       int64
	PatchTargetsTargetIDSite400ApplicationJSONObject *PatchTargetsTargetIDSite400ApplicationJSON
	PatchTargetsTargetIDSite401ApplicationJSONObject *PatchTargetsTargetIDSite401ApplicationJSON
	PatchTargetsTargetIDSite403ApplicationJSONObject *PatchTargetsTargetIDSite403ApplicationJSON
	PatchTargetsTargetIDSite404ApplicationJSONObject *PatchTargetsTargetIDSite404ApplicationJSON
}
