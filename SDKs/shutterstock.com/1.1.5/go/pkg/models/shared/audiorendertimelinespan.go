package shared

type AudioRenderTimelineSpanSpanTypeEnum string

const (
	AudioRenderTimelineSpanSpanTypeEnumMetered   AudioRenderTimelineSpanSpanTypeEnum = "metered"
	AudioRenderTimelineSpanSpanTypeEnumUnmetered AudioRenderTimelineSpanSpanTypeEnum = "unmetered"
)

// AudioRenderTimelineSpan
// The beginning of a non-overlapping period of absolute time
type AudioRenderTimelineSpan struct {
	ID               *float64                                 `json:"id,omitempty"`
	InstrumentGroups []AudioRenderTimelineSpanInstrumentGroup `json:"instrument_groups,omitempty"`
	Regions          []AudioRenderTimelineSpanRegion          `json:"regions,omitempty"`
	SpanType         AudioRenderTimelineSpanSpanTypeEnum      `json:"span_type"`
	Tempo            *int64                                   `json:"tempo,omitempty"`
	TempoChanges     []AudioRenderTimelineSpanTempoChanges    `json:"tempo_changes,omitempty"`
	Time             int64                                    `json:"time"`
}
