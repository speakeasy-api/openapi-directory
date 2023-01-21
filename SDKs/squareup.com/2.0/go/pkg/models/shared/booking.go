package shared

// Booking
// Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
// at a given location to a requesting customer in one or more appointment segments.
type Booking struct {
	AppointmentSegments []AppointmentSegment `json:"appointment_segments,omitempty"`
	CreatedAt           *string              `json:"created_at,omitempty"`
	CustomerID          *string              `json:"customer_id,omitempty"`
	CustomerNote        *string              `json:"customer_note,omitempty"`
	ID                  *string              `json:"id,omitempty"`
	LocationID          *string              `json:"location_id,omitempty"`
	SellerNote          *string              `json:"seller_note,omitempty"`
	StartAt             *string              `json:"start_at,omitempty"`
	Status              *string              `json:"status,omitempty"`
	UpdatedAt           *string              `json:"updated_at,omitempty"`
	Version             *int64               `json:"version,omitempty"`
}
