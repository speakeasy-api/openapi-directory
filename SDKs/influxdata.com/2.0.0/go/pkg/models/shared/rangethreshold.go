package shared

type RangeThresholdTypeEnum string

const (
	RangeThresholdTypeEnumRange RangeThresholdTypeEnum = "range"
)

type RangeThreshold struct {
	AllValues *bool                  `json:"allValues,omitempty"`
	Level     *CheckStatusLevelEnum  `json:"level,omitempty"`
	Max       float32                `json:"max"`
	Min       float32                `json:"min"`
	Type      RangeThresholdTypeEnum `json:"type"`
	Within    bool                   `json:"within"`
}
