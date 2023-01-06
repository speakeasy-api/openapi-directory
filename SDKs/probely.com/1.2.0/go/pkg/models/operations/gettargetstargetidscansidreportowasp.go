package operations

type GetTargetsTargetIDScansIDReportOwaspPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansIDReportOwasp401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportOwasp404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDReportOwaspRequest struct {
	PathParams GetTargetsTargetIDScansIDReportOwaspPathParams
}

type GetTargetsTargetIDScansIDReportOwaspResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetTargetsTargetIDScansIDReportOwasp200ApplicationPdfBinaryString []byte
	GetTargetsTargetIDScansIDReportOwasp401ApplicationJSONObject      *GetTargetsTargetIDScansIDReportOwasp401ApplicationJSON
	GetTargetsTargetIDScansIDReportOwasp404ApplicationJSONObject      *GetTargetsTargetIDScansIDReportOwasp404ApplicationJSON
}
