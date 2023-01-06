package shared

// AudioRenderTimelineSpanTempoChanges
// An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
type AudioRenderTimelineSpanTempoChanges struct {
	Tempo float64 `json:"tempo"`
	Time  float64 `json:"time"`
}
