package shared

// AdultInfo
// An object describing whether the image contains adult-oriented content and/or is racy.
type AdultInfo struct {
	AdultScore     *float64 `json:"adultScore,omitempty"`
	GoreScore      *float64 `json:"goreScore,omitempty"`
	IsAdultContent *bool    `json:"isAdultContent,omitempty"`
	IsGoryContent  *bool    `json:"isGoryContent,omitempty"`
	IsRacyContent  *bool    `json:"isRacyContent,omitempty"`
	RacyScore      *float64 `json:"racyScore,omitempty"`
}
