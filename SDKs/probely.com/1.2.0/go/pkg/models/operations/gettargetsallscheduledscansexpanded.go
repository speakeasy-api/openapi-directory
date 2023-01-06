package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsAllScheduledscansExpandedQueryParams struct {
	Length *int64 `queryParam:"style=form,explode=true,name=length"`
}

type GetTargetsAllScheduledscansExpanded200ApplicationJSON struct {
	Results []shared.Scheduled `json:"results,omitempty"`
}

type GetTargetsAllScheduledscansExpanded404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsAllScheduledscansExpandedRequest struct {
	QueryParams GetTargetsAllScheduledscansExpandedQueryParams
}

type GetTargetsAllScheduledscansExpandedResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetTargetsAllScheduledscansExpanded200ApplicationJSONObject *GetTargetsAllScheduledscansExpanded200ApplicationJSON
	GetTargetsAllScheduledscansExpanded404ApplicationJSONObject *GetTargetsAllScheduledscansExpanded404ApplicationJSON
}
