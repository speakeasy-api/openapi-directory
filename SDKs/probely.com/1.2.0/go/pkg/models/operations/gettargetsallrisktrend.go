package operations

import (
	"time"
)

type GetTargetsAllRiskTrend200ApplicationJSON struct {
	Zero *time.Time `json:"0,omitempty"`
	One  *int64     `json:"1,omitempty"`
}

type GetTargetsAllRiskTrendResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetTargetsAllRiskTrend200ApplicationJSONObjects []GetTargetsAllRiskTrend200ApplicationJSON
}
