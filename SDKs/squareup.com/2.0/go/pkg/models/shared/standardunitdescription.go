package shared

// StandardUnitDescription
// Contains the name and abbreviation for standard measurement unit.
type StandardUnitDescription struct {
	Abbreviation *string          `json:"abbreviation,omitempty"`
	Name         *string          `json:"name,omitempty"`
	Unit         *MeasurementUnit `json:"unit,omitempty"`
}
