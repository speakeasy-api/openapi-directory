package shared

// AudioRenderTimelineSpanInstrumentGroup
// An instrument and the status objects that specify when that instrument plays
type AudioRenderTimelineSpanInstrumentGroup struct {
	InstrumentGroup string                                         `json:"instrument_group"`
	Statuses        []AudioRenderTimelineSpanInstrumentGroupStatus `json:"statuses,omitempty"`
}
