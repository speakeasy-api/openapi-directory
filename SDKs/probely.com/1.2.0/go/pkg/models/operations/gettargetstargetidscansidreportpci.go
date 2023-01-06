package operations

type GetTargetsTargetIDScansIDReportPciPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansIDReportPci401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportPci404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportPciRequest struct {
	PathParams GetTargetsTargetIDScansIDReportPciPathParams
}

type GetTargetsTargetIDScansIDReportPciResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetTargetsTargetIDScansIDReportPci200ApplicationPdfBinaryString []byte
	GetTargetsTargetIDScansIDReportPci401ApplicationJSONObject      *GetTargetsTargetIDScansIDReportPci401ApplicationJSON
	GetTargetsTargetIDScansIDReportPci404ApplicationJSONObject      *GetTargetsTargetIDScansIDReportPci404ApplicationJSON
}
