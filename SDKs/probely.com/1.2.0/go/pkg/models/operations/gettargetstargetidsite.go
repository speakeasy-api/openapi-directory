package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDSitePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDSite401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDSite404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDSiteRequest struct {
	PathParams GetTargetsTargetIDSitePathParams
}

type GetTargetsTargetIDSiteResponse struct {
	ContentType                                    string
	Site                                           *shared.Site
	StatusCode                                     int64
	GetTargetsTargetIDSite401ApplicationJSONObject *GetTargetsTargetIDSite401ApplicationJSON
	GetTargetsTargetIDSite404ApplicationJSONObject *GetTargetsTargetIDSite404ApplicationJSON
}
