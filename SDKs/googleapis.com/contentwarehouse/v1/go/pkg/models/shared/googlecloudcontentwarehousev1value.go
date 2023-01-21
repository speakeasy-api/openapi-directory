package shared

// GoogleCloudContentwarehouseV1Value
// `Value` represents a dynamically typed value which can be either be a float, a integer, a string, or a datetime value. A producer of value is expected to set one of these variants. Absence of any variant indicates an error.
type GoogleCloudContentwarehouseV1Value struct {
	BooleanValue   *bool                                        `json:"booleanValue,omitempty"`
	DatetimeValue  *GoogleTypeDateTime                          `json:"datetimeValue,omitempty"`
	EnumValue      *GoogleCloudContentwarehouseV1EnumValue      `json:"enumValue,omitempty"`
	FloatValue     *float32                                     `json:"floatValue,omitempty"`
	IntValue       *int32                                       `json:"intValue,omitempty"`
	StringValue    *string                                      `json:"stringValue,omitempty"`
	TimestampValue *GoogleCloudContentwarehouseV1TimestampValue `json:"timestampValue,omitempty"`
}
