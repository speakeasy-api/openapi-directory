package shared

// CategoryDetail
// An object describing additional category details.
type CategoryDetail struct {
	Celebrities []CelebritiesModel `json:"celebrities,omitempty"`
	Landmarks   []LandmarksModel   `json:"landmarks,omitempty"`
}
