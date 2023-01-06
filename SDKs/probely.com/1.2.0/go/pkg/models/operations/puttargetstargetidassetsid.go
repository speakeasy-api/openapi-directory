package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDAssetsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDAssetsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsTargetIDAssetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDAssetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDAssetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDAssetsIDRequest struct {
	PathParams PutTargetsTargetIDAssetsIDPathParams
	Request    shared.AssetInput `request:"mediaType=application/json"`
}

type PutTargetsTargetIDAssetsIDResponse struct {
	Asset                                              *shared.Asset
	ContentType                                        string
	StatusCode                                         int64
	PutTargetsTargetIDAssetsID400ApplicationJSONObject *PutTargetsTargetIDAssetsID400ApplicationJSON
	PutTargetsTargetIDAssetsID401ApplicationJSONObject *PutTargetsTargetIDAssetsID401ApplicationJSON
	PutTargetsTargetIDAssetsID403ApplicationJSONObject *PutTargetsTargetIDAssetsID403ApplicationJSON
	PutTargetsTargetIDAssetsID404ApplicationJSONObject *PutTargetsTargetIDAssetsID404ApplicationJSON
}
