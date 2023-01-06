package shared

// EventDates
// Event's Dates
type EventDates struct {
	Access           *AccessDates
	End              *EndDates
	SpanMultipleDays *bool
	Start            *StartDates
	Status           *EventStatus
	Timezone         *string
}
