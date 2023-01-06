package shared

type AudioRenderTimelineSpanRegionEndTypeEventEnum string

const (
	AudioRenderTimelineSpanRegionEndTypeEventEnumEnding     AudioRenderTimelineSpanRegionEndTypeEventEnum = "ending"
	AudioRenderTimelineSpanRegionEndTypeEventEnumTransition AudioRenderTimelineSpanRegionEndTypeEventEnum = "transition"
)

type AudioRenderTimelineSpanRegionEndTypeTypeEnum string

const (
	AudioRenderTimelineSpanRegionEndTypeTypeEnumRingout AudioRenderTimelineSpanRegionEndTypeTypeEnum = "ringout"
	AudioRenderTimelineSpanRegionEndTypeTypeEnumCut     AudioRenderTimelineSpanRegionEndTypeTypeEnum = "cut"
)

// AudioRenderTimelineSpanRegionEndType
// A high-level description of how a region ends
type AudioRenderTimelineSpanRegionEndType struct {
	Beat  float64                                       `json:"beat"`
	Event AudioRenderTimelineSpanRegionEndTypeEventEnum `json:"event"`
	Type  AudioRenderTimelineSpanRegionEndTypeTypeEnum  `json:"type"`
}

type AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum string

const (
	AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleFlat  AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = "double flat"
	AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumFlat        AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = "flat"
	AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumNatural     AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = "natural"
	AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumSharp       AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = "sharp"
	AudioRenderTimelineSpanRegionKeyTonicAccidentalEnumDoubleSharp AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = "double sharp"
)

type AudioRenderTimelineSpanRegionKeyTonicNoteEnum string

const (
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumC AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "c"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumD AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "d"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumE AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "e"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumF AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "f"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumG AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "g"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumA AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "a"
	AudioRenderTimelineSpanRegionKeyTonicNoteEnumB AudioRenderTimelineSpanRegionKeyTonicNoteEnum = "b"
)

type AudioRenderTimelineSpanRegionKeyTonicQualityEnum string

const (
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumMajor         AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "major"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumNaturalMinor  AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "natural_minor"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumHarmonicMinor AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "harmonic_minor"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumMelodicMinor  AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "melodic_minor"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumIonian        AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "ionian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumDorian        AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "dorian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumPhrygian      AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "phrygian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumLydian        AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "lydian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumMixolydian    AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "mixolydian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumAeolian       AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "aeolian"
	AudioRenderTimelineSpanRegionKeyTonicQualityEnumLocrian       AudioRenderTimelineSpanRegionKeyTonicQualityEnum = "locrian"
)

// AudioRenderTimelineSpanRegionKey
// The key signature active at the beginning of the region
type AudioRenderTimelineSpanRegionKey struct {
	TonicAccidental *AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum `json:"tonic_accidental,omitempty"`
	TonicNote       *AudioRenderTimelineSpanRegionKeyTonicNoteEnum       `json:"tonic_note,omitempty"`
	TonicQuality    *AudioRenderTimelineSpanRegionKeyTonicQualityEnum    `json:"tonic_quality,omitempty"`
}

type AudioRenderTimelineSpanRegionRegionEnum string

const (
	AudioRenderTimelineSpanRegionRegionEnumMusic   AudioRenderTimelineSpanRegionRegionEnum = "music"
	AudioRenderTimelineSpanRegionRegionEnumSilence AudioRenderTimelineSpanRegionRegionEnum = "silence"
)

// AudioRenderTimelineSpanRegion
// A period of music or silence, measured in beats
type AudioRenderTimelineSpanRegion struct {
	Beat       int64                                   `json:"beat"`
	Descriptor string                                  `json:"descriptor"`
	EndType    *AudioRenderTimelineSpanRegionEndType   `json:"end_type,omitempty"`
	ID         float64                                 `json:"id"`
	Key        *AudioRenderTimelineSpanRegionKey       `json:"key,omitempty"`
	Region     AudioRenderTimelineSpanRegionRegionEnum `json:"region"`
}
