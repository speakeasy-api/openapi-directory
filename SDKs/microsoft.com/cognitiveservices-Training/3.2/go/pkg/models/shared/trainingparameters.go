package shared

// TrainingParameters
// Parameters used for training.
type TrainingParameters struct {
	SelectedTags []string `json:"selectedTags,omitempty" form:"name=selectedTags"`
}
