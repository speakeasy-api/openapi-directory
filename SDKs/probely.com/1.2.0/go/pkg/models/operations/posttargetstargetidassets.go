package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDAssetsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDAssets400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsTargetIDAssets401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssets403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssets404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssetsRequest struct {
	PathParams PostTargetsTargetIDAssetsPathParams
	Request    shared.AssetInput `request:"mediaType=application/json"`
}

type PostTargetsTargetIDAssetsResponse struct {
	Asset                                             *shared.Asset
	ContentType                                       string
	StatusCode                                        int64
	PostTargetsTargetIDAssets400ApplicationJSONObject *PostTargetsTargetIDAssets400ApplicationJSON
	PostTargetsTargetIDAssets401ApplicationJSONObject *PostTargetsTargetIDAssets401ApplicationJSON
	PostTargetsTargetIDAssets403ApplicationJSONObject *PostTargetsTargetIDAssets403ApplicationJSON
	PostTargetsTargetIDAssets404ApplicationJSONObject *PostTargetsTargetIDAssets404ApplicationJSON
}
