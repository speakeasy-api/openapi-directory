package operations

import (
	"time"
)

type GetTargetsTargetIDScansRetrievePagePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansRetrievePageQueryParams struct {
	Date   time.Time `queryParam:"style=form,explode=true,name=date"`
	Length *int64    `queryParam:"style=form,explode=true,name=length"`
}

type GetTargetsTargetIDScansRetrievePage200ApplicationJSON struct {
	Page *int64 `json:"page,omitempty"`
}

type GetTargetsTargetIDScansRetrievePage400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type GetTargetsTargetIDScansRetrievePage401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansRetrievePage404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansRetrievePageRequest struct {
	PathParams  GetTargetsTargetIDScansRetrievePagePathParams
	QueryParams GetTargetsTargetIDScansRetrievePageQueryParams
}

type GetTargetsTargetIDScansRetrievePageResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetTargetsTargetIDScansRetrievePage200ApplicationJSONObject *GetTargetsTargetIDScansRetrievePage200ApplicationJSON
	GetTargetsTargetIDScansRetrievePage400ApplicationJSONObject *GetTargetsTargetIDScansRetrievePage400ApplicationJSON
	GetTargetsTargetIDScansRetrievePage401ApplicationJSONObject *GetTargetsTargetIDScansRetrievePage401ApplicationJSON
	GetTargetsTargetIDScansRetrievePage404ApplicationJSONObject *GetTargetsTargetIDScansRetrievePage404ApplicationJSON
}
