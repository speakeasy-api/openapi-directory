package shared

type FindingBulkRetest struct {
	Ids         []string         `json:"ids"`
	ScanProfile *ScanProfileEnum `json:"scan_profile,omitempty"`
}
