package shared

// ExportDataRequest
// Request message for ExportData.
type ExportDataRequest struct {
	OutputConfig *DatasetOutputConfig `json:"outputConfig,omitempty"`
}
