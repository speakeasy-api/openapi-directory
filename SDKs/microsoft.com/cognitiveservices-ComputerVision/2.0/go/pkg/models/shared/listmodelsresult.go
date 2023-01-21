package shared

// ListModelsResult
// Result of the List Domain Models operation.
type ListModelsResult struct {
	Models []ModelDescription `json:"models,omitempty"`
}
