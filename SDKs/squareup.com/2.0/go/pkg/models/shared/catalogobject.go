package shared

// CatalogObject
// The wrapper object for the Catalog entries of a given object type.
//
// The type of a particular `CatalogObject` is determined by the value of the
// `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
// For example, the following list shows some instances of `CatalogObject` of a given `type` and
// their corresponding data attribute that can be set:
// - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
// - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
// - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
// - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
// - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
// - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
// - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
// - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
// - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
// - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
// - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
// - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
// - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
//
// For a more detailed discussion of the Catalog data model, please see the
// [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
type CatalogObject struct {
	AbsentAtLocationIds           []string                               `json:"absent_at_location_ids,omitempty"`
	CatalogV1Ids                  []CatalogV1ID                          `json:"catalog_v1_ids,omitempty"`
	CategoryData                  *CatalogCategory                       `json:"category_data,omitempty"`
	CustomAttributeDefinitionData *CatalogCustomAttributeDefinition      `json:"custom_attribute_definition_data,omitempty"`
	CustomAttributeValues         map[string]CatalogCustomAttributeValue `json:"custom_attribute_values,omitempty"`
	DiscountData                  *CatalogDiscount                       `json:"discount_data,omitempty"`
	ID                            string                                 `json:"id"`
	ImageData                     *CatalogImage                          `json:"image_data,omitempty"`
	ImageID                       *string                                `json:"image_id,omitempty"`
	IsDeleted                     *bool                                  `json:"is_deleted,omitempty"`
	ItemData                      *CatalogItem                           `json:"item_data,omitempty"`
	ItemOptionData                *CatalogItemOption                     `json:"item_option_data,omitempty"`
	ItemOptionValueData           *CatalogItemOptionValue                `json:"item_option_value_data,omitempty"`
	ItemVariationData             *CatalogItemVariation                  `json:"item_variation_data,omitempty"`
	MeasurementUnitData           *CatalogMeasurementUnit                `json:"measurement_unit_data,omitempty"`
	ModifierData                  *CatalogModifier                       `json:"modifier_data,omitempty"`
	ModifierListData              *CatalogModifierList                   `json:"modifier_list_data,omitempty"`
	PresentAtAllLocations         *bool                                  `json:"present_at_all_locations,omitempty"`
	PresentAtLocationIds          []string                               `json:"present_at_location_ids,omitempty"`
	PricingRuleData               *CatalogPricingRule                    `json:"pricing_rule_data,omitempty"`
	ProductSetData                *CatalogProductSet                     `json:"product_set_data,omitempty"`
	QuickAmountsSettingsData      *CatalogQuickAmountsSettings           `json:"quick_amounts_settings_data,omitempty"`
	SubscriptionPlanData          *CatalogSubscriptionPlan               `json:"subscription_plan_data,omitempty"`
	TaxData                       *CatalogTax                            `json:"tax_data,omitempty"`
	TimePeriodData                *CatalogTimePeriod                     `json:"time_period_data,omitempty"`
	Type                          string                                 `json:"type"`
	UpdatedAt                     *string                                `json:"updated_at,omitempty"`
	Version                       *int64                                 `json:"version,omitempty"`
}
