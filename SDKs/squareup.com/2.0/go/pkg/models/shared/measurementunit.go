package shared

// MeasurementUnit
// Represents a unit of measurement to use with a quantity, such as ounces
// or inches. Exactly one of the following fields are required: `custom_unit`,
// `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
type MeasurementUnit struct {
	AreaUnit    *string                `json:"area_unit,omitempty"`
	CustomUnit  *MeasurementUnitCustom `json:"custom_unit,omitempty"`
	GenericUnit *string                `json:"generic_unit,omitempty"`
	LengthUnit  *string                `json:"length_unit,omitempty"`
	TimeUnit    *string                `json:"time_unit,omitempty"`
	Type        *string                `json:"type,omitempty"`
	VolumeUnit  *string                `json:"volume_unit,omitempty"`
	WeightUnit  *string                `json:"weight_unit,omitempty"`
}
