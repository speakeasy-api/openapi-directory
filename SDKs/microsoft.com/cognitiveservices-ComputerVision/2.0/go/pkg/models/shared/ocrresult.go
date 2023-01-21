package shared

type OcrResult struct {
	Language    *string     `json:"language,omitempty"`
	Orientation *string     `json:"orientation,omitempty"`
	Regions     []OcrRegion `json:"regions,omitempty"`
	TextAngle   *float64    `json:"textAngle,omitempty"`
}
