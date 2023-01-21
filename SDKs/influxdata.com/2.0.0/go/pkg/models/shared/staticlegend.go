package shared

// StaticLegend
// StaticLegend represents the options specific to the static legend
type StaticLegend struct {
	ColorizeRows         *bool    `json:"colorizeRows,omitempty"`
	HeightRatio          *float32 `json:"heightRatio,omitempty"`
	Hide                 *bool    `json:"hide,omitempty"`
	Opacity              *float32 `json:"opacity,omitempty"`
	OrientationThreshold *int64   `json:"orientationThreshold,omitempty"`
	ValueAxis            *string  `json:"valueAxis,omitempty"`
	WidthRatio           *float32 `json:"widthRatio,omitempty"`
}
