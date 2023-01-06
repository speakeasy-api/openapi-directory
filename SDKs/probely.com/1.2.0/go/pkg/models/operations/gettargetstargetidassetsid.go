package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDAssetsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDAssetsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type GetTargetsTargetIDAssetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDAssetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDAssetsIDRequest struct {
	PathParams GetTargetsTargetIDAssetsIDPathParams
}

type GetTargetsTargetIDAssetsIDResponse struct {
	Asset                                              *shared.Asset
	ContentType                                        string
	StatusCode                                         int64
	GetTargetsTargetIDAssetsID400ApplicationJSONObject *GetTargetsTargetIDAssetsID400ApplicationJSON
	GetTargetsTargetIDAssetsID401ApplicationJSONObject *GetTargetsTargetIDAssetsID401ApplicationJSON
	GetTargetsTargetIDAssetsID404ApplicationJSONObject *GetTargetsTargetIDAssetsID404ApplicationJSON
}
