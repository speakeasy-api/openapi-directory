package operations

type GetTargetsTargetIDFindingsReportPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsReportQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type GetTargetsTargetIDFindingsReport400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type GetTargetsTargetIDFindingsReport401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsReport404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsReportRequest struct {
	PathParams  GetTargetsTargetIDFindingsReportPathParams
	QueryParams GetTargetsTargetIDFindingsReportQueryParams
}

type GetTargetsTargetIDFindingsReportResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	GetTargetsTargetIDFindingsReport200ApplicationPdfBinaryString []byte
	GetTargetsTargetIDFindingsReport400ApplicationJSONObject      *GetTargetsTargetIDFindingsReport400ApplicationJSON
	GetTargetsTargetIDFindingsReport401ApplicationJSONObject      *GetTargetsTargetIDFindingsReport401ApplicationJSON
	GetTargetsTargetIDFindingsReport404ApplicationJSONObject      *GetTargetsTargetIDFindingsReport404ApplicationJSON
}
