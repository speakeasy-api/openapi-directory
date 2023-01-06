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
	Attribution *string
	Fallback    *bool
	Height      *int32
	Ratio       *ImageRatioEnum
	URL         *string
	Width       *int32
}
