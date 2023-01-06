package shared

type TextRecognitionResultUnitEnum string

const (
	TextRecognitionResultUnitEnumPixel TextRecognitionResultUnitEnum = "pixel"
	TextRecognitionResultUnitEnumInch  TextRecognitionResultUnitEnum = "inch"
)

// TextRecognitionResult
// An object representing a recognized text region
type TextRecognitionResult struct {
	ClockwiseOrientation *float64                       `json:"clockwiseOrientation,omitempty"`
	Height               *float64                       `json:"height,omitempty"`
	Lines                []Line                         `json:"lines"`
	Page                 *int64                         `json:"page,omitempty"`
	Unit                 *TextRecognitionResultUnitEnum `json:"unit,omitempty"`
	Width                *float64                       `json:"width,omitempty"`
}
