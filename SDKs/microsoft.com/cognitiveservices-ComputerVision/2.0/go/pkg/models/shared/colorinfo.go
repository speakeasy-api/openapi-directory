package shared

// ColorInfo
// An object providing additional metadata describing color attributes.
type ColorInfo struct {
	AccentColor             *string  `json:"accentColor,omitempty"`
	DominantColorBackground *string  `json:"dominantColorBackground,omitempty"`
	DominantColorForeground *string  `json:"dominantColorForeground,omitempty"`
	DominantColors          []string `json:"dominantColors,omitempty"`
	IsBWImg                 *bool    `json:"isBWImg,omitempty"`
}
