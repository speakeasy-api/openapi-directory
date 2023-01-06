package shared

// AudioRenderTimeline
// A timeline object that represents either a request for music to be created or an entire music composition
type AudioRenderTimeline struct {
	Spans []AudioRenderTimelineSpan `json:"spans,omitempty"`
}
