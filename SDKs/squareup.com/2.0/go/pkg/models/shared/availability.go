package shared

// Availability
// Describes a slot available for booking, encapsulating appointment segments, the location and starting time.
type Availability struct {
	AppointmentSegments []AppointmentSegment `json:"appointment_segments,omitempty"`
	LocationID          *string              `json:"location_id,omitempty"`
	StartAt             *string              `json:"start_at,omitempty"`
}
