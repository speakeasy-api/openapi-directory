package shared

type TableViewPropertiesShapeEnum string

const (
	TableViewPropertiesShapeEnumChronografV2 TableViewPropertiesShapeEnum = "chronograf-v2"
)

type TableViewPropertiesTableOptionsWrappingEnum string

const (
	TableViewPropertiesTableOptionsWrappingEnumTruncate   TableViewPropertiesTableOptionsWrappingEnum = "truncate"
	TableViewPropertiesTableOptionsWrappingEnumWrap       TableViewPropertiesTableOptionsWrappingEnum = "wrap"
	TableViewPropertiesTableOptionsWrappingEnumSingleLine TableViewPropertiesTableOptionsWrappingEnum = "single-line"
)

type TableViewPropertiesTableOptions struct {
	FixFirstColumn   *bool                                        `json:"fixFirstColumn,omitempty"`
	SortBy           *RenamableField                              `json:"sortBy,omitempty"`
	VerticalTimeAxis *bool                                        `json:"verticalTimeAxis,omitempty"`
	Wrapping         *TableViewPropertiesTableOptionsWrappingEnum `json:"wrapping,omitempty"`
}

type TableViewPropertiesTypeEnum string

const (
	TableViewPropertiesTypeEnumTable TableViewPropertiesTypeEnum = "table"
)

type TableViewPropertiesTableOptionsInput struct {
	FixFirstColumn   *bool                                        `json:"fixFirstColumn,omitempty"`
	SortBy           *RenamableFieldInput                         `json:"sortBy,omitempty"`
	VerticalTimeAxis *bool                                        `json:"verticalTimeAxis,omitempty"`
	Wrapping         *TableViewPropertiesTableOptionsWrappingEnum `json:"wrapping,omitempty"`
}

type TableViewProperties struct {
	Colors            []DashboardColor                `json:"colors"`
	DecimalPlaces     DecimalPlaces                   `json:"decimalPlaces"`
	FieldOptions      []RenamableField                `json:"fieldOptions"`
	Note              string                          `json:"note"`
	Queries           []DashboardQuery                `json:"queries"`
	Shape             TableViewPropertiesShapeEnum    `json:"shape"`
	ShowNoteWhenEmpty bool                            `json:"showNoteWhenEmpty"`
	TableOptions      TableViewPropertiesTableOptions `json:"tableOptions"`
	TimeFormat        string                          `json:"timeFormat"`
	Type              TableViewPropertiesTypeEnum     `json:"type"`
}

type TableViewPropertiesInput struct {
	Colors            []DashboardColor                     `json:"colors"`
	DecimalPlaces     DecimalPlaces                        `json:"decimalPlaces"`
	FieldOptions      []RenamableFieldInput                `json:"fieldOptions"`
	Note              string                               `json:"note"`
	Queries           []DashboardQuery                     `json:"queries"`
	Shape             TableViewPropertiesShapeEnum         `json:"shape"`
	ShowNoteWhenEmpty bool                                 `json:"showNoteWhenEmpty"`
	TableOptions      TableViewPropertiesTableOptionsInput `json:"tableOptions"`
	TimeFormat        string                               `json:"timeFormat"`
	Type              TableViewPropertiesTypeEnum          `json:"type"`
}
