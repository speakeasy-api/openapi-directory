package shared

type DurationField struct {
	Name       *string
	Precise    *bool
	Supported  *bool
	Type       *DurationFieldType
	UnitMillis *int64
}
