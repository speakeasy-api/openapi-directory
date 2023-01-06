package shared

// CustomsItemInput
// The customs declaration for a single item in the shipment.
type CustomsItemInput struct {
	CountryOfOrigin      map[string]interface{} `json:"country_of_origin,omitempty"`
	Description          *string                `json:"description,omitempty"`
	HarmonizedTariffCode *string                `json:"harmonized_tariff_code,omitempty"`
	Quantity             *int32                 `json:"quantity,omitempty"`
	Sku                  *string                `json:"sku,omitempty"`
	SkuDescription       *string                `json:"sku_description,omitempty"`
	UnitOfMeasure        *string                `json:"unit_of_measure,omitempty"`
	Value                *MonetaryValue         `json:"value,omitempty"`
}

// CustomsItem
// The customs declaration for a single item in the shipment.
type CustomsItem struct {
	CountryOfOrigin      map[string]interface{} `json:"country_of_origin,omitempty"`
	CustomsItemID        map[string]interface{} `json:"customs_item_id"`
	Description          *string                `json:"description,omitempty"`
	HarmonizedTariffCode *string                `json:"harmonized_tariff_code,omitempty"`
	Quantity             *int32                 `json:"quantity,omitempty"`
	Sku                  *string                `json:"sku,omitempty"`
	SkuDescription       *string                `json:"sku_description,omitempty"`
	UnitOfMeasure        *string                `json:"unit_of_measure,omitempty"`
	Value                *MonetaryValue         `json:"value,omitempty"`
}
