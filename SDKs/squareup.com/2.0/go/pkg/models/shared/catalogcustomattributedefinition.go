package shared

// CatalogCustomAttributeDefinition
// Contains information defining a custom attribute. Custom attributes are
// intended to store additional information about a catalog object or to associate a
// catalog object with an entity in another system. Do not use custom attributes
// to store any sensitive information (personally identifiable information, card details, etc.).
// [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
type CatalogCustomAttributeDefinition struct {
	AllowedObjectTypes        []string                                         `json:"allowed_object_types"`
	AppVisibility             *string                                          `json:"app_visibility,omitempty"`
	CustomAttributeUsageCount *int64                                           `json:"custom_attribute_usage_count,omitempty"`
	Description               *string                                          `json:"description,omitempty"`
	Key                       *string                                          `json:"key,omitempty"`
	Name                      string                                           `json:"name"`
	NumberConfig              *CatalogCustomAttributeDefinitionNumberConfig    `json:"number_config,omitempty"`
	SelectionConfig           *CatalogCustomAttributeDefinitionSelectionConfig `json:"selection_config,omitempty"`
	SellerVisibility          *string                                          `json:"seller_visibility,omitempty"`
	SourceApplication         *SourceApplication                               `json:"source_application,omitempty"`
	StringConfig              *CatalogCustomAttributeDefinitionStringConfig    `json:"string_config,omitempty"`
	Type                      string                                           `json:"type"`
}
