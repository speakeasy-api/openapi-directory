package operations

import (
	"time"
)

type GetTargetsTargetIDRiskTrendPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDRiskTrend200ApplicationJSON struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsTargetIDRiskTrendRequest struct {
	PathParams GetTargetsTargetIDRiskTrendPathParams
}

type GetTargetsTargetIDRiskTrendResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetTargetsTargetIDRiskTrend200ApplicationJSONObjects []GetTargetsTargetIDRiskTrend200ApplicationJSON
}
