package shared

// ShiftWorkday
// A `Shift` search query filter parameter that sets a range of days that
// a `Shift` must start or end in before passing the filter condition.
type ShiftWorkday struct {
	DateRange       *DateRange `json:"date_range,omitempty"`
	DefaultTimezone *string    `json:"default_timezone,omitempty"`
	MatchShiftsBy   *string    `json:"match_shifts_by,omitempty"`
}
