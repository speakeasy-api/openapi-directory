package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDAssetsIDVerifyPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDAssetsIDVerifyRequestBody struct {
	Type shared.VerificationTypeEnum `json:"type"`
}

type PostTargetsTargetIDAssetsIDVerify200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostTargetsTargetIDAssetsIDVerify400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostTargetsTargetIDAssetsIDVerify401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssetsIDVerify403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssetsIDVerify404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDAssetsIDVerifyRequest struct {
	PathParams PostTargetsTargetIDAssetsIDVerifyPathParams
	Request    PostTargetsTargetIDAssetsIDVerifyRequestBody `request:"mediaType=application/json"`
}

type PostTargetsTargetIDAssetsIDVerifyResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	PostTargetsTargetIDAssetsIDVerify200ApplicationJSONObject *PostTargetsTargetIDAssetsIDVerify200ApplicationJSON
	PostTargetsTargetIDAssetsIDVerify400ApplicationJSONObject *PostTargetsTargetIDAssetsIDVerify400ApplicationJSON
	PostTargetsTargetIDAssetsIDVerify401ApplicationJSONObject *PostTargetsTargetIDAssetsIDVerify401ApplicationJSON
	PostTargetsTargetIDAssetsIDVerify403ApplicationJSONObject *PostTargetsTargetIDAssetsIDVerify403ApplicationJSON
	PostTargetsTargetIDAssetsIDVerify404ApplicationJSONObject *PostTargetsTargetIDAssetsIDVerify404ApplicationJSON
}
