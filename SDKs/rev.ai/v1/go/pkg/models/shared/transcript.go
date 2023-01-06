package shared

type TranscriptMonologuesElementsTypeEnum string

const (
	TranscriptMonologuesElementsTypeEnumText    TranscriptMonologuesElementsTypeEnum = "text"
	TranscriptMonologuesElementsTypeEnumPunct   TranscriptMonologuesElementsTypeEnum = "punct"
	TranscriptMonologuesElementsTypeEnumUnknown TranscriptMonologuesElementsTypeEnum = "unknown"
)

type TranscriptMonologuesElements struct {
	Confidence *float64                              `json:"confidence,omitempty"`
	Ts         *float64                              `json:"ts,omitempty"`
	TsEnd      *float64                              `json:"ts_end,omitempty"`
	Type       *TranscriptMonologuesElementsTypeEnum `json:"type,omitempty"`
	Value      *string                               `json:"value,omitempty"`
}

type TranscriptMonologues struct {
	Elements []TranscriptMonologuesElements `json:"elements,omitempty"`
	Speaker  *int64                         `json:"speaker,omitempty"`
}

// Transcript
// Rev.ai Transcript Model
// ***
// Note: properties are not displayed in the returned object if they are null
//
// Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
type Transcript struct {
	Monologues []TranscriptMonologues `json:"monologues,omitempty"`
}
