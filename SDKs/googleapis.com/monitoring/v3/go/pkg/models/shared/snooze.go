package shared

// Snooze
// A Snooze will prevent any alerts from being opened, and close any that are already open. The Snooze will work on alerts that match the criteria defined in the Snooze. The Snooze will be active from interval.start_time through interval.end_time.
type Snooze struct {
	Criteria    *Criteria     `json:"criteria,omitempty"`
	DisplayName *string       `json:"displayName,omitempty"`
	Interval    *TimeInterval `json:"interval,omitempty"`
	Name        *string       `json:"name,omitempty"`
}
