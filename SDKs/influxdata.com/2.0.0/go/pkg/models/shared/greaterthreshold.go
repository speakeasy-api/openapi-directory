package shared

type GreaterThresholdTypeEnum string

const (
	GreaterThresholdTypeEnumGreater GreaterThresholdTypeEnum = "greater"
)

type GreaterThreshold struct {
	AllValues *bool                    `json:"allValues,omitempty"`
	Level     *CheckStatusLevelEnum    `json:"level,omitempty"`
	Type      GreaterThresholdTypeEnum `json:"type"`
	Value     float32                  `json:"value"`
}
