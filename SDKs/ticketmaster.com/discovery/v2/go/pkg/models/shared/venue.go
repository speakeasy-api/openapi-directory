package shared

type VenueTypeEnum string

const (
	VenueTypeEnumEvent      VenueTypeEnum = "event"
	VenueTypeEnumVenue      VenueTypeEnum = "venue"
	VenueTypeEnumAttraction VenueTypeEnum = "attraction"
)

// Venue
// Venue
type Venue struct {
	AccessibleSeatingDetail *string
	AdditionalInfo          *string
	Address                 *Address
	BoxOfficeInfo           *VenueBoxOfficeInfo
	City                    *City
	Country                 *Country
	Currency                *string
	Description             *string
	Distance                *float64
	Dma                     []Dma
	ExternalLinks           map[string][]ExternalLink
	GeneralInfo             *VenueGeneralInfo
	ID                      string
	Images                  []Image
	Locale                  *string
	Location                *Location
	Markets                 []Market
	Name                    *string
	ParkingDetail           *string
	PostalCode              *string
	Social                  *Social
	State                   *State
	Test                    *bool
	Timezone                *string
	Type                    VenueTypeEnum
	Units                   *string
	UpcomingEvents          map[string]int32
	URL                     *string
}
