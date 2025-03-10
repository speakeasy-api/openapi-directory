// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AudioRenderTimelineSpanTempoChanges - An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
type AudioRenderTimelineSpanTempoChanges struct {
	// The tempo, in beats per minute, active at this time
	Tempo float64 `json:"tempo"`
	// The time, in seconds, at which the tempo exists
	Time float64 `json:"time"`
}
