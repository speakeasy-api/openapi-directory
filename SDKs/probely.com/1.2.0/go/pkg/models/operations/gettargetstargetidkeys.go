package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDKeysPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDKeysQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetTargetsTargetIDKeys200ApplicationJSON struct {
	Count     *int64       `json:"count,omitempty"`
	Length    *int64       `json:"length,omitempty"`
	Page      *int64       `json:"page,omitempty"`
	PageTotal *int64       `json:"page_total,omitempty"`
	Results   []shared.Key `json:"results,omitempty"`
}

type GetTargetsTargetIDKeys401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDKeys404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDKeysRequest struct {
	PathParams  GetTargetsTargetIDKeysPathParams
	QueryParams GetTargetsTargetIDKeysQueryParams
}

type GetTargetsTargetIDKeysResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetTargetsTargetIDKeys200ApplicationJSONObject *GetTargetsTargetIDKeys200ApplicationJSON
	GetTargetsTargetIDKeys401ApplicationJSONObject *GetTargetsTargetIDKeys401ApplicationJSON
	GetTargetsTargetIDKeys404ApplicationJSONObject *GetTargetsTargetIDKeys404ApplicationJSON
}
