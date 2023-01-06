package shared

type ImageRatioEnum string

const (
	ImageRatioEnumSixteen9 ImageRatioEnum = "16_9"
	ImageRatioEnumThree2   ImageRatioEnum = "3_2"
	ImageRatioEnumFour3    ImageRatioEnum = "4_3"
)

// Image
// Image
type Image struct {
	Attribution *string         `json:"attribution,omitempty"`
	Domains     []string        `json:"domains,omitempty"`
	Fallback    *bool           `json:"fallback,omitempty"`
	Height      *int32          `json:"height,omitempty"`
	Ratio       *ImageRatioEnum `json:"ratio,omitempty"`
	URL         *string         `json:"url,omitempty"`
	Width       *int32          `json:"width,omitempty"`
}
