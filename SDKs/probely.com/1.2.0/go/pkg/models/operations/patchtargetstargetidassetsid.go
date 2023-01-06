package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDAssetsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDAssetsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDAssetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDAssetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDAssetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDAssetsIDRequest struct {
	PathParams PatchTargetsTargetIDAssetsIDPathParams
	Request    shared.AssetInput `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDAssetsIDResponse struct {
	Asset                                                *shared.Asset
	ContentType                                          string
	StatusCode                                           int64
	PatchTargetsTargetIDAssetsID400ApplicationJSONObject *PatchTargetsTargetIDAssetsID400ApplicationJSON
	PatchTargetsTargetIDAssetsID401ApplicationJSONObject *PatchTargetsTargetIDAssetsID401ApplicationJSON
	PatchTargetsTargetIDAssetsID403ApplicationJSONObject *PatchTargetsTargetIDAssetsID403ApplicationJSON
	PatchTargetsTargetIDAssetsID404ApplicationJSONObject *PatchTargetsTargetIDAssetsID404ApplicationJSON
}
