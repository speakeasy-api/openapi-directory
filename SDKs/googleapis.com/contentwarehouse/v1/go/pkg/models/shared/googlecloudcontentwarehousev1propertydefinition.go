package shared

type GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum string

const (
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumRetrievalImportanceUnspecified GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "RETRIEVAL_IMPORTANCE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumHighest                        GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "HIGHEST"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumHigher                         GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "HIGHER"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumHigh                           GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "HIGH"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumMedium                         GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "MEDIUM"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumLow                            GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "LOW"
	GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnumLowest                         GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum = "LOWEST"
)

// GoogleCloudContentwarehouseV1PropertyDefinition
// Defines the metadata for a schema property.
type GoogleCloudContentwarehouseV1PropertyDefinition struct {
	DateTimeTypeOptions  map[string]interface{}                                                  `json:"dateTimeTypeOptions,omitempty"`
	DisplayName          *string                                                                 `json:"displayName,omitempty"`
	EnumTypeOptions      *GoogleCloudContentwarehouseV1EnumTypeOptions                           `json:"enumTypeOptions,omitempty"`
	FloatTypeOptions     map[string]interface{}                                                  `json:"floatTypeOptions,omitempty"`
	IntegerTypeOptions   map[string]interface{}                                                  `json:"integerTypeOptions,omitempty"`
	IsFilterable         *bool                                                                   `json:"isFilterable,omitempty"`
	IsMetadata           *bool                                                                   `json:"isMetadata,omitempty"`
	IsRepeatable         *bool                                                                   `json:"isRepeatable,omitempty"`
	IsRequired           *bool                                                                   `json:"isRequired,omitempty"`
	IsSearchable         *bool                                                                   `json:"isSearchable,omitempty"`
	MapTypeOptions       map[string]interface{}                                                  `json:"mapTypeOptions,omitempty"`
	Name                 *string                                                                 `json:"name,omitempty"`
	PropertyTypeOptions  *GoogleCloudContentwarehouseV1PropertyTypeOptions                       `json:"propertyTypeOptions,omitempty"`
	RetrievalImportance  *GoogleCloudContentwarehouseV1PropertyDefinitionRetrievalImportanceEnum `json:"retrievalImportance,omitempty"`
	TextTypeOptions      map[string]interface{}                                                  `json:"textTypeOptions,omitempty"`
	TimestampTypeOptions map[string]interface{}                                                  `json:"timestampTypeOptions,omitempty"`
}
