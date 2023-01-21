package shared

// CatalogTimePeriod
// Represents a time period - either a single period or a repeating period.
type CatalogTimePeriod struct {
	Event *string `json:"event,omitempty"`
}
