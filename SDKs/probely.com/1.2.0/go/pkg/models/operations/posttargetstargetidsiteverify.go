package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDSiteVerifyPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDSiteVerifyRequestBody struct {
	Type shared.VerificationTypeEnum `json:"type"`
}

type PostTargetsTargetIDSiteVerify200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostTargetsTargetIDSiteVerify400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostTargetsTargetIDSiteVerify401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDSiteVerify403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDSiteVerify404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDSiteVerifyRequest struct {
	PathParams PostTargetsTargetIDSiteVerifyPathParams
	Request    PostTargetsTargetIDSiteVerifyRequestBody `request:"mediaType=application/json"`
}

type PostTargetsTargetIDSiteVerifyResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PostTargetsTargetIDSiteVerify200ApplicationJSONObject *PostTargetsTargetIDSiteVerify200ApplicationJSON
	PostTargetsTargetIDSiteVerify400ApplicationJSONObject *PostTargetsTargetIDSiteVerify400ApplicationJSON
	PostTargetsTargetIDSiteVerify401ApplicationJSONObject *PostTargetsTargetIDSiteVerify401ApplicationJSON
	PostTargetsTargetIDSiteVerify403ApplicationJSONObject *PostTargetsTargetIDSiteVerify403ApplicationJSON
	PostTargetsTargetIDSiteVerify404ApplicationJSONObject *PostTargetsTargetIDSiteVerify404ApplicationJSON
}
