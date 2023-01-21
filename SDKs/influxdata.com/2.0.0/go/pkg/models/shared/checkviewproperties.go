package shared

type CheckViewPropertiesShapeEnum string

const (
	CheckViewPropertiesShapeEnumChronografV2 CheckViewPropertiesShapeEnum = "chronograf-v2"
)

type CheckViewPropertiesTypeEnum string

const (
	CheckViewPropertiesTypeEnumCheck CheckViewPropertiesTypeEnum = "check"
)

type CheckViewProperties struct {
	Check                      *interface{}                 `json:"check,omitempty"`
	CheckID                    string                       `json:"checkID"`
	Colors                     []DashboardColor             `json:"colors"`
	LegendColorizeRows         *bool                        `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                        `json:"legendHide,omitempty"`
	LegendOpacity              *float32                     `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                       `json:"legendOrientationThreshold,omitempty"`
	Queries                    []DashboardQuery             `json:"queries"`
	Shape                      CheckViewPropertiesShapeEnum `json:"shape"`
	Type                       CheckViewPropertiesTypeEnum  `json:"type"`
}

type CheckViewPropertiesInput struct {
	Check                      *interface{}                 `json:"check,omitempty"`
	CheckID                    string                       `json:"checkID"`
	Colors                     []DashboardColor             `json:"colors"`
	LegendColorizeRows         *bool                        `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                        `json:"legendHide,omitempty"`
	LegendOpacity              *float32                     `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                       `json:"legendOrientationThreshold,omitempty"`
	Queries                    []DashboardQuery             `json:"queries"`
	Shape                      CheckViewPropertiesShapeEnum `json:"shape"`
	Type                       CheckViewPropertiesTypeEnum  `json:"type"`
}
