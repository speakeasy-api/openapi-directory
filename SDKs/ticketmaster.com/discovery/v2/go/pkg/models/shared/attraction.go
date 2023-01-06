package shared

type AttractionTypeEnum string

const (
	AttractionTypeEnumEvent      AttractionTypeEnum = "event"
	AttractionTypeEnumVenue      AttractionTypeEnum = "venue"
	AttractionTypeEnumAttraction AttractionTypeEnum = "attraction"
)

// Attraction
// Attraction
type Attraction struct {
	AdditionalInfo  *string
	Classifications []Classification
	Description     *string
	ExternalLinks   map[string][]ExternalLink
	ID              string
	Images          []Image
	Locale          *string
	Name            *string
	Test            *bool
	Type            AttractionTypeEnum
	UpcomingEvents  map[string]int32
	URL             *string
}
