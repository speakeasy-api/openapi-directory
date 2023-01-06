package operations

import (
	"time"
)

type GetTargetsTargetIDScansDatesPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansDates401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansDates404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansDatesRequest struct {
	PathParams GetTargetsTargetIDScansDatesPathParams
}

type GetTargetsTargetIDScansDatesResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetTargetsTargetIDScansDates200ApplicationJSONDateStrings []time.Time
	GetTargetsTargetIDScansDates401ApplicationJSONObject      *GetTargetsTargetIDScansDates401ApplicationJSON
	GetTargetsTargetIDScansDates404ApplicationJSONObject      *GetTargetsTargetIDScansDates404ApplicationJSON
}
