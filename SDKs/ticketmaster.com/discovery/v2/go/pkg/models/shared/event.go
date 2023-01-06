package shared

type EventTypeEnum string

const (
	EventTypeEnumEvent      EventTypeEnum = "event"
	EventTypeEnumVenue      EventTypeEnum = "venue"
	EventTypeEnumAttraction EventTypeEnum = "attraction"
)

// Event
// Event
type Event struct {
	Accessibility   *Accessibility
	AdditionalInfo  *string
	Classifications []Classification
	Dates           *EventDates
	Description     *string
	Distance        *float64
	ExternalLinks   map[string][]ExternalLink
	ID              string
	Images          []Image
	Info            *string
	Locale          *string
	Location        *Location
	Name            *string
	Outlets         []Outlet
	Place           *Place
	PleaseNote      *string
	PriceRanges     []PriceRange
	Products        []Product
	Promoter        *Promoter
	Promoters       []Promoter
	Sales           *EventSalesDates
	Seatmap         *SeatMap
	Test            *bool
	Type            EventTypeEnum
	Units           *string
	URL             *string
}
