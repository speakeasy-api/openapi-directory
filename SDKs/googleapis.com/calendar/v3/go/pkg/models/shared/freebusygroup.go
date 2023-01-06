package shared

// FreeBusyGroup
// List of calendars that are members of this group.
type FreeBusyGroup struct {
	Calendars []string `json:"calendars,omitempty"`
	Errors    []Error  `json:"errors,omitempty"`
}
