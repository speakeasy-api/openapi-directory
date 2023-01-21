package shared

// OrderQuantityUnit
// Contains the measurement unit for a quantity and a precision that
// specifies the number of digits after the decimal point for decimal quantities.
type OrderQuantityUnit struct {
	CatalogVersion  *int64           `json:"catalog_version,omitempty"`
	MeasurementUnit *MeasurementUnit `json:"measurement_unit,omitempty"`
	Precision       *int64           `json:"precision,omitempty"`
}
