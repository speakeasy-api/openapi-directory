package shared

// SearchAvailabilityQuery
// Query conditions to search for availabilities of bookings.
type SearchAvailabilityQuery struct {
	Filter SearchAvailabilityFilter `json:"filter"`
}
