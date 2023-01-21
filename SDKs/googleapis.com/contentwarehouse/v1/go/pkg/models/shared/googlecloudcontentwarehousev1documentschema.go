package shared

// GoogleCloudContentwarehouseV1DocumentSchema
// A document schema used to define document structure.
type GoogleCloudContentwarehouseV1DocumentSchema struct {
	CreateTime          *string                                           `json:"createTime,omitempty"`
	Description         *string                                           `json:"description,omitempty"`
	DisplayName         *string                                           `json:"displayName,omitempty"`
	DocumentIsFolder    *bool                                             `json:"documentIsFolder,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	PropertyDefinitions []GoogleCloudContentwarehouseV1PropertyDefinition `json:"propertyDefinitions,omitempty"`
	UpdateTime          *string                                           `json:"updateTime,omitempty"`
}

// GoogleCloudContentwarehouseV1DocumentSchemaInput
// A document schema used to define document structure.
type GoogleCloudContentwarehouseV1DocumentSchemaInput struct {
	Description         *string                                           `json:"description,omitempty"`
	DisplayName         *string                                           `json:"displayName,omitempty"`
	DocumentIsFolder    *bool                                             `json:"documentIsFolder,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	PropertyDefinitions []GoogleCloudContentwarehouseV1PropertyDefinition `json:"propertyDefinitions,omitempty"`
}
