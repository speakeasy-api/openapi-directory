package shared

type ReportSuccess struct {
	Data    *ReportResponse `json:"data,omitempty"`
	Msg     *string         `json:"msg,omitempty"`
	Success *string         `json:"success,omitempty"`
}
