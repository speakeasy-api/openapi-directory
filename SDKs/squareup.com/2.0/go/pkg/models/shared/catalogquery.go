package shared

// CatalogQuery
// A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.
//
// Although a query can have multiple filters, only certain query types can be combined per call to [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects).
// Any combination of the following types may be used together:
// - [exact_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryExact)
// - [prefix_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryPrefix)
// - [range_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryRange)
// - [sorted_attribute_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQuerySortedAttribute)
// - [text_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryText)
// All other query types cannot be combined with any others.
//
// When a query filter is based on an attribute, the attribute must be searchable.
// Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.
//
// * Searchable attribute and objects queryable by searchable attributes **
// - `name`:  `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, 'CatalogModifierList`, `CatalogItemOption`, `CatalogItemOptionValue`
// - `description`: `CatalogItem`, `CatalogItemOptionValue`
// - `abbreviation`: `CatalogItem`
// - `upc`: `CatalogItemVariation`
// - `sku`: `CatalogItemVariation`
// - `caption`: `CatalogImage`
// - `display_name`: `CatalogItemOption`
//
// For example, to search for [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) objects by searchable attributes, you can use
// the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query filter.
type CatalogQuery struct {
	ExactQuery                             *CatalogQueryExact                             `json:"exact_query,omitempty"`
	ItemVariationsForItemOptionValuesQuery *CatalogQueryItemVariationsForItemOptionValues `json:"item_variations_for_item_option_values_query,omitempty"`
	ItemsForItemOptionsQuery               *CatalogQueryItemsForItemOptions               `json:"items_for_item_options_query,omitempty"`
	ItemsForModifierListQuery              *CatalogQueryItemsForModifierList              `json:"items_for_modifier_list_query,omitempty"`
	ItemsForTaxQuery                       *CatalogQueryItemsForTax                       `json:"items_for_tax_query,omitempty"`
	PrefixQuery                            *CatalogQueryPrefix                            `json:"prefix_query,omitempty"`
	RangeQuery                             *CatalogQueryRange                             `json:"range_query,omitempty"`
	SetQuery                               *CatalogQuerySet                               `json:"set_query,omitempty"`
	SortedAttributeQuery                   *CatalogQuerySortedAttribute                   `json:"sorted_attribute_query,omitempty"`
	TextQuery                              *CatalogQueryText                              `json:"text_query,omitempty"`
}
