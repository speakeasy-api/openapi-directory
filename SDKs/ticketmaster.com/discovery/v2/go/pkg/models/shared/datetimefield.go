package shared

type DateTimeField struct {
	DurationField      *DurationField
	LeapDurationField  *DurationField
	Lenient            *bool
	MaximumValue       *int32
	MinimumValue       *int32
	Name               *string
	RangeDurationField *DurationField
	Supported          *bool
	Type               *DateTimeFieldType
}
