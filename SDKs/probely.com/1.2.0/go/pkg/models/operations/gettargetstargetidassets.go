package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDAssetsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDAssetsQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetTargetsTargetIDAssets200ApplicationJSON struct {
	Count     *int64         `json:"count,omitempty"`
	Length    *int64         `json:"length,omitempty"`
	Page      *int64         `json:"page,omitempty"`
	PageTotal *int64         `json:"page_total,omitempty"`
	Results   []shared.Asset `json:"results,omitempty"`
}

type GetTargetsTargetIDAssets401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDAssets404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDAssetsRequest struct {
	PathParams  GetTargetsTargetIDAssetsPathParams
	QueryParams GetTargetsTargetIDAssetsQueryParams
}

type GetTargetsTargetIDAssetsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetTargetsTargetIDAssets200ApplicationJSONObject *GetTargetsTargetIDAssets200ApplicationJSON
	GetTargetsTargetIDAssets401ApplicationJSONObject *GetTargetsTargetIDAssets401ApplicationJSON
	GetTargetsTargetIDAssets404ApplicationJSONObject *GetTargetsTargetIDAssets404ApplicationJSON
}
