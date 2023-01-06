package shared

// FreeBusyCalendar
// Free/busy expansions for a single calendar.
type FreeBusyCalendar struct {
	Busy   []TimePeriod `json:"busy,omitempty"`
	Errors []Error      `json:"errors,omitempty"`
}
