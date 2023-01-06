package shared

type LocalTime struct {
	Chronology     *Chronology
	FieldTypes     []DateTimeFieldType
	Fields         []DateTimeField
	HourOfDay      *int32
	MillisOfDay    *int32
	MillisOfSecond *int32
	MinuteOfHour   *int32
	SecondOfMinute *int32
	Values         []int32
}
