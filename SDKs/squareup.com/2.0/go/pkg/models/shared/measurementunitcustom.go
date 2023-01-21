package shared

// MeasurementUnitCustom
// The information needed to define a custom unit, provided by the seller.
type MeasurementUnitCustom struct {
	Abbreviation string `json:"abbreviation"`
	Name         string `json:"name"`
}
