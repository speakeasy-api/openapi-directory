package shared

type AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum string

const (
	AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumActive   AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum = "active"
	AudioRenderTimelineSpanInstrumentGroupStatusStatusEnumInactive AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum = "inactive"
)

// AudioRenderTimelineSpanInstrumentGroupStatus
// The status of an instrument at a specific beat
type AudioRenderTimelineSpanInstrumentGroupStatus struct {
	Beat   float64                                                `json:"beat"`
	Status AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum `json:"status"`
}
