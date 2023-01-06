package shared

// Weight
// The weight of a package
type Weight struct {
	Unit  WeightUnitEnum `json:"unit"`
	Value float64        `json:"value"`
}
