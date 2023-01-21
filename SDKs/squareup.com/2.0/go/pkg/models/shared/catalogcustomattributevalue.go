package shared

// CatalogCustomAttributeValue
// An instance of a custom attribute. Custom attributes can be defined and
// added to `ITEM` and `ITEM_VARIATION` type catalog objects.
// [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).
type CatalogCustomAttributeValue struct {
	BooleanValue                *bool    `json:"boolean_value,omitempty"`
	CustomAttributeDefinitionID *string  `json:"custom_attribute_definition_id,omitempty"`
	Key                         *string  `json:"key,omitempty"`
	Name                        *string  `json:"name,omitempty"`
	NumberValue                 *string  `json:"number_value,omitempty"`
	SelectionUIDValues          []string `json:"selection_uid_values,omitempty"`
	StringValue                 *string  `json:"string_value,omitempty"`
	Type                        *string  `json:"type,omitempty"`
}
