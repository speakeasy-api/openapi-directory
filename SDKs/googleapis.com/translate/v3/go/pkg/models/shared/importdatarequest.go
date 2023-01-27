package shared

// ImportDataRequest
// Request message for ImportData.
type ImportDataRequest struct {
	InputConfig *DatasetInputConfig `json:"inputConfig,omitempty"`
}
