package shared

// Dimensions
// The dimensions of a package
type Dimensions struct {
	Height float64                `json:"height"`
	Length float64                `json:"length"`
	Unit   map[string]interface{} `json:"unit"`
	Width  float64                `json:"width"`
}
