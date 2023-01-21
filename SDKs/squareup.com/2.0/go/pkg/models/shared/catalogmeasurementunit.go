package shared

// CatalogMeasurementUnit
// Represents the unit used to measure a `CatalogItemVariation` and
// specifies the precision for decimal quantities.
type CatalogMeasurementUnit struct {
	MeasurementUnit *MeasurementUnit `json:"measurement_unit,omitempty"`
	Precision       *int64           `json:"precision,omitempty"`
}
