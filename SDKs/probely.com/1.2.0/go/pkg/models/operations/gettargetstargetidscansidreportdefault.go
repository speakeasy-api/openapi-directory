package operations

type GetTargetsTargetIDScansIDReportDefaultPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansIDReportDefault401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportDefault404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportDefaultRequest struct {
	PathParams GetTargetsTargetIDScansIDReportDefaultPathParams
}

type GetTargetsTargetIDScansIDReportDefaultResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetTargetsTargetIDScansIDReportDefault200ApplicationPdfBinaryString []byte
	GetTargetsTargetIDScansIDReportDefault401ApplicationJSONObject      *GetTargetsTargetIDScansIDReportDefault401ApplicationJSON
	GetTargetsTargetIDScansIDReportDefault404ApplicationJSONObject      *GetTargetsTargetIDScansIDReportDefault404ApplicationJSON
}
