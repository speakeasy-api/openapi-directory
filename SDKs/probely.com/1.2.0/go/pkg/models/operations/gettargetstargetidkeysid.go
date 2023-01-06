package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDKeysIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDKeysID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDKeysID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDKeysIDRequest struct {
	PathParams GetTargetsTargetIDKeysIDPathParams
}

type GetTargetsTargetIDKeysIDResponse struct {
	APIKey                                           *shared.APIKey
	ContentType                                      string
	StatusCode                                       int64
	GetTargetsTargetIDKeysID403ApplicationJSONObject *GetTargetsTargetIDKeysID403ApplicationJSON
	GetTargetsTargetIDKeysID404ApplicationJSONObject *GetTargetsTargetIDKeysID404ApplicationJSON
}
