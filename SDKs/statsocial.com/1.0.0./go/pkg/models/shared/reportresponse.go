package shared

type ReportResponse struct {
	CombinedAge *CombinedAge `json:"Combined Age,omitempty"`
	Sex         *Sex         `json:"Sex,omitempty"`
}
