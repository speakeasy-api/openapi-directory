package shared

type PriceRangeTypeEnum string

const (
	PriceRangeTypeEnumStandard PriceRangeTypeEnum = "standard"
)

// PriceRange
// PriceRange
type PriceRange struct {
	Currency *string
	Max      *float64
	Min      *float64
	Type     *PriceRangeTypeEnum
}
