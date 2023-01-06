package operations

import (
	"time"
)

type GetTargetsTargetIDSeverityTrendPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsHigh struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsLow struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsMedium struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsTargetIDSeverityTrend200ApplicationJSONResults struct {
	High   []GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsHigh   `json:"high,omitempty"`
	Low    []GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsLow    `json:"low,omitempty"`
	Medium []GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsMedium `json:"medium,omitempty"`
}

type GetTargetsTargetIDSeverityTrend200ApplicationJSON struct {
	Results *GetTargetsTargetIDSeverityTrend200ApplicationJSONResults `json:"results,omitempty"`
	Step    *float32                                                  `json:"step,omitempty"`
}

type GetTargetsTargetIDSeverityTrendRequest struct {
	PathParams GetTargetsTargetIDSeverityTrendPathParams
}

type GetTargetsTargetIDSeverityTrendResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetTargetsTargetIDSeverityTrend200ApplicationJSONObject *GetTargetsTargetIDSeverityTrend200ApplicationJSON
}
