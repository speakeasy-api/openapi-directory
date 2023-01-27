package shared

// SapValidation
// A presentation of SAP workload insight. The schema of SAP workloads validation related data.
type SapValidation struct {
	ValidationDetails []SapValidationValidationDetail `json:"validationDetails,omitempty"`
}
