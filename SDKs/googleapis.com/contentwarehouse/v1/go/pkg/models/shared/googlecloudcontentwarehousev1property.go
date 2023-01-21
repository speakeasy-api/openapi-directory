package shared

// GoogleCloudContentwarehouseV1Property
// Property of a document.
type GoogleCloudContentwarehouseV1Property struct {
	DateTimeValues  *GoogleCloudContentwarehouseV1DateTimeArray  `json:"dateTimeValues,omitempty"`
	EnumValues      *GoogleCloudContentwarehouseV1EnumArray      `json:"enumValues,omitempty"`
	FloatValues     *GoogleCloudContentwarehouseV1FloatArray     `json:"floatValues,omitempty"`
	IntegerValues   *GoogleCloudContentwarehouseV1IntegerArray   `json:"integerValues,omitempty"`
	MapProperty     *GoogleCloudContentwarehouseV1MapProperty    `json:"mapProperty,omitempty"`
	Name            *string                                      `json:"name,omitempty"`
	PropertyValues  *GoogleCloudContentwarehouseV1PropertyArray  `json:"propertyValues,omitempty"`
	TextValues      *GoogleCloudContentwarehouseV1TextArray      `json:"textValues,omitempty"`
	TimestampValues *GoogleCloudContentwarehouseV1TimestampArray `json:"timestampValues,omitempty"`
}
