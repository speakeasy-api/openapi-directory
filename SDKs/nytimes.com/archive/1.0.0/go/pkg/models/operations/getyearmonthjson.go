package operations

import (
	"openapi/pkg/models/shared"
)

type GetYearMonthJSONPathParams struct {
	Month int32 `pathParam:"style=simple,explode=false,name=month"`
	Year  int32 `pathParam:"style=simple,explode=false,name=year"`
}

type GetYearMonthJSON200ApplicationJSONResponseMeta struct {
	Hits   *int64 `json:"hits,omitempty"`
	Offset *int64 `json:"offset,omitempty"`
	Time   *int64 `json:"time,omitempty"`
}

type GetYearMonthJSON200ApplicationJSONResponse struct {
	Docs []shared.Doc                                    `json:"docs,omitempty"`
	Meta *GetYearMonthJSON200ApplicationJSONResponseMeta `json:"meta,omitempty"`
}

type GetYearMonthJSON200ApplicationJSON struct {
	Response *GetYearMonthJSON200ApplicationJSONResponse `json:"response,omitempty"`
}

type GetYearMonthJSONRequest struct {
	PathParams GetYearMonthJSONPathParams
}

type GetYearMonthJSONResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetYearMonthJSON200ApplicationJSONObject *GetYearMonthJSON200ApplicationJSON
}
