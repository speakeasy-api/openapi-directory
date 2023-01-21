package shared

// GoogleCloudContentwarehouseV1PropertyDefinition
// Defines the metadata for a schema property.
type GoogleCloudContentwarehouseV1PropertyDefinition struct {
	DateTimeTypeOptions  map[string]interface{}                            `json:"dateTimeTypeOptions,omitempty"`
	DisplayName          *string                                           `json:"displayName,omitempty"`
	EnumTypeOptions      *GoogleCloudContentwarehouseV1EnumTypeOptions     `json:"enumTypeOptions,omitempty"`
	FloatTypeOptions     map[string]interface{}                            `json:"floatTypeOptions,omitempty"`
	IntegerTypeOptions   map[string]interface{}                            `json:"integerTypeOptions,omitempty"`
	IsFilterable         *bool                                             `json:"isFilterable,omitempty"`
	IsMetadata           *bool                                             `json:"isMetadata,omitempty"`
	IsRepeatable         *bool                                             `json:"isRepeatable,omitempty"`
	IsRequired           *bool                                             `json:"isRequired,omitempty"`
	IsSearchable         *bool                                             `json:"isSearchable,omitempty"`
	MapTypeOptions       map[string]interface{}                            `json:"mapTypeOptions,omitempty"`
	Name                 *string                                           `json:"name,omitempty"`
	PropertyTypeOptions  *GoogleCloudContentwarehouseV1PropertyTypeOptions `json:"propertyTypeOptions,omitempty"`
	TextTypeOptions      map[string]interface{}                            `json:"textTypeOptions,omitempty"`
	TimestampTypeOptions map[string]interface{}                            `json:"timestampTypeOptions,omitempty"`
}
