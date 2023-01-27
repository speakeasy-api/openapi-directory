package shared

type GoogleCloudContentwarehouseV1DocumentQuery struct {
	CustomPropertyFilter  *string                                             `json:"customPropertyFilter,omitempty"`
	CustomWeightsMetadata *GoogleCloudContentwarehouseV1CustomWeightsMetadata `json:"customWeightsMetadata,omitempty"`
	DocumentCreatorFilter []string                                            `json:"documentCreatorFilter,omitempty"`
	DocumentSchemaNames   []string                                            `json:"documentSchemaNames,omitempty"`
	FileTypeFilter        *GoogleCloudContentwarehouseV1FileTypeFilter        `json:"fileTypeFilter,omitempty"`
	FolderNameFilter      *string                                             `json:"folderNameFilter,omitempty"`
	IsNlQuery             *bool                                               `json:"isNlQuery,omitempty"`
	PropertyFilter        []GoogleCloudContentwarehouseV1PropertyFilter       `json:"propertyFilter,omitempty"`
	Query                 *string                                             `json:"query,omitempty"`
	QueryContext          []string                                            `json:"queryContext,omitempty"`
	TimeFilters           []GoogleCloudContentwarehouseV1TimeFilter           `json:"timeFilters,omitempty"`
}
