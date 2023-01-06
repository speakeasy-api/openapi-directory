package operations

import (
	"time"
)

type GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsAllSeverityTrend200ApplicationJSONResultsLow struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsAllSeverityTrend200ApplicationJSONResults struct {
	High   []GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh   `json:"high,omitempty"`
	Low    []GetTargetsAllSeverityTrend200ApplicationJSONResultsLow    `json:"low,omitempty"`
	Medium []GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium `json:"medium,omitempty"`
}

type GetTargetsAllSeverityTrend200ApplicationJSON struct {
	Results *GetTargetsAllSeverityTrend200ApplicationJSONResults `json:"results,omitempty"`
	Step    *float32                                             `json:"step,omitempty"`
}

type GetTargetsAllSeverityTrendResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetTargetsAllSeverityTrend200ApplicationJSONObject *GetTargetsAllSeverityTrend200ApplicationJSON
}
