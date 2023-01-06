package shared

// AdvancedShipmentOptionsWeight
// The weight of a package
type AdvancedShipmentOptionsWeight struct {
	Unit  WeightUnitEnum `json:"unit"`
	Value float64        `json:"value"`
}

// AdvancedShipmentOptions
// Advanced shipment options
type AdvancedShipmentOptions struct {
	BillToAccount              *string                        `json:"bill_to_account,omitempty"`
	BillToCountryCode          map[string]interface{}         `json:"bill_to_country_code,omitempty"`
	BillToParty                map[string]interface{}         `json:"bill_to_party,omitempty"`
	BillToPostalCode           *string                        `json:"bill_to_postal_code,omitempty"`
	CollectOnDelivery          *CollectOnDelivery             `json:"collect_on_delivery,omitempty"`
	ContainsAlcohol            *bool                          `json:"contains_alcohol,omitempty"`
	CustomField1               *string                        `json:"custom_field1,omitempty"`
	CustomField2               *string                        `json:"custom_field2,omitempty"`
	CustomField3               *string                        `json:"custom_field3,omitempty"`
	DeliveredDutyPaid          *bool                          `json:"delivered_duty_paid,omitempty"`
	DryIce                     *bool                          `json:"dry_ice,omitempty"`
	DryIceWeight               *AdvancedShipmentOptionsWeight `json:"dry_ice_weight,omitempty"`
	FreightClass               *string                        `json:"freight_class,omitempty"`
	NonMachinable              *bool                          `json:"non_machinable,omitempty"`
	SaturdayDelivery           *bool                          `json:"saturday_delivery,omitempty"`
	UseUpsGroundFreightPricing *bool                          `json:"use_ups_ground_freight_pricing,omitempty"`
}
