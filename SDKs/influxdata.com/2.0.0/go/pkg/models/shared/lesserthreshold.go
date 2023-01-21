package shared

type LesserThresholdTypeEnum string

const (
	LesserThresholdTypeEnumLesser LesserThresholdTypeEnum = "lesser"
)

type LesserThreshold struct {
	AllValues *bool                   `json:"allValues,omitempty"`
	Level     *CheckStatusLevelEnum   `json:"level,omitempty"`
	Type      LesserThresholdTypeEnum `json:"type"`
	Value     float32                 `json:"value"`
}
