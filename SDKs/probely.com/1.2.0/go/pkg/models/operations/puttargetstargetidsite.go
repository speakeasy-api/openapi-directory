package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDSitePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDSite400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsTargetIDSite401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDSite403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDSite404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDSiteRequest struct {
	PathParams PutTargetsTargetIDSitePathParams
	Request    shared.SiteInput `request:"mediaType=application/json"`
}

type PutTargetsTargetIDSiteResponse struct {
	ContentType                                    string
	Site                                           *shared.Site
	StatusCode                                     int64
	PutTargetsTargetIDSite400ApplicationJSONObject *PutTargetsTargetIDSite400ApplicationJSON
	PutTargetsTargetIDSite401ApplicationJSONObject *PutTargetsTargetIDSite401ApplicationJSON
	PutTargetsTargetIDSite403ApplicationJSONObject *PutTargetsTargetIDSite403ApplicationJSON
	PutTargetsTargetIDSite404ApplicationJSONObject *PutTargetsTargetIDSite404ApplicationJSON
}
