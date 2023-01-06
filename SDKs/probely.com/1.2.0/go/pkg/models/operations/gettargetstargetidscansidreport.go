package operations

type GetTargetsTargetIDScansIDReportPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansIDReport401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReport404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportRequest struct {
	PathParams GetTargetsTargetIDScansIDReportPathParams
}

type GetTargetsTargetIDScansIDReportResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetTargetsTargetIDScansIDReport200ApplicationPdfBinaryString []byte
	GetTargetsTargetIDScansIDReport401ApplicationJSONObject      *GetTargetsTargetIDScansIDReport401ApplicationJSON
	GetTargetsTargetIDScansIDReport404ApplicationJSONObject      *GetTargetsTargetIDScansIDReport404ApplicationJSON
}
