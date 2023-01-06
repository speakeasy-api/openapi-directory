package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDScanNowPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDScanNowRequestBodyScanProfileEnum string

const (
	PostTargetsTargetIDScanNowRequestBodyScanProfileEnumSafe      PostTargetsTargetIDScanNowRequestBodyScanProfileEnum = "safe"
	PostTargetsTargetIDScanNowRequestBodyScanProfileEnumNormal    PostTargetsTargetIDScanNowRequestBodyScanProfileEnum = "normal"
	PostTargetsTargetIDScanNowRequestBodyScanProfileEnumFull      PostTargetsTargetIDScanNowRequestBodyScanProfileEnum = "full"
	PostTargetsTargetIDScanNowRequestBodyScanProfileEnumLightning PostTargetsTargetIDScanNowRequestBodyScanProfileEnum = "lightning"
)

type PostTargetsTargetIDScanNowRequestBody struct {
	ScanProfile *PostTargetsTargetIDScanNowRequestBodyScanProfileEnum `json:"scan_profile,omitempty"`
}

type PostTargetsTargetIDScanNow400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostTargetsTargetIDScanNow401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScanNow403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScanNow404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScanNowRequest struct {
	PathParams PostTargetsTargetIDScanNowPathParams
	Request    *PostTargetsTargetIDScanNowRequestBody `request:"mediaType=application/json"`
}

type PostTargetsTargetIDScanNowResponse struct {
	ContentType                                        string
	Scan                                               *shared.Scan
	StatusCode                                         int64
	PostTargetsTargetIDScanNow400ApplicationJSONObject *PostTargetsTargetIDScanNow400ApplicationJSON
	PostTargetsTargetIDScanNow401ApplicationJSONObject *PostTargetsTargetIDScanNow401ApplicationJSON
	PostTargetsTargetIDScanNow403ApplicationJSONObject *PostTargetsTargetIDScanNow403ApplicationJSON
	PostTargetsTargetIDScanNow404ApplicationJSONObject *PostTargetsTargetIDScanNow404ApplicationJSON
}
