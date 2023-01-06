package shared

import (
	"time"
)

// PartialShipmentInternationalShipmentOptionsInput
// Options for international shipments, such as customs declarations.
type PartialShipmentInternationalShipmentOptionsInput struct {
	Contents     map[string]interface{} `json:"contents"`
	CustomsItems []CustomsItemInput     `json:"customs_items,omitempty"`
	NonDelivery  map[string]interface{} `json:"non_delivery"`
}

// PartialShipmentInternationalShipmentOptions
// Options for international shipments, such as customs declarations.
type PartialShipmentInternationalShipmentOptions struct {
	Contents     map[string]interface{} `json:"contents"`
	CustomsItems []CustomsItem          `json:"customs_items,omitempty"`
	NonDelivery  map[string]interface{} `json:"non_delivery"`
}

// PartialShipmentWeight
// The weight of a package
type PartialShipmentWeight struct {
	Unit  WeightUnitEnum `json:"unit"`
	Value float64        `json:"value"`
}

// PartialShipmentInput
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type PartialShipmentInput struct {
	AdvancedOptions    *AdvancedShipmentOptions                          `json:"advanced_options,omitempty"`
	CarrierID          *string                                           `json:"carrier_id,omitempty"`
	Confirmation       map[string]interface{}                            `json:"confirmation,omitempty"`
	Customs            *PartialShipmentInternationalShipmentOptionsInput `json:"customs,omitempty"`
	ExternalOrderID    *string                                           `json:"external_order_id,omitempty"`
	ExternalShipmentID *string                                           `json:"external_shipment_id,omitempty"`
	InsuranceProvider  map[string]interface{}                            `json:"insurance_provider,omitempty"`
	Items              []ShipmentItem                                    `json:"items,omitempty"`
	OrderSourceCode    *OrderSourceNameEnum                              `json:"order_source_code,omitempty"`
	Packages           []PackageInput                                    `json:"packages,omitempty"`
	ReturnTo           *Address                                          `json:"return_to,omitempty"`
	ServiceCode        *string                                           `json:"service_code,omitempty"`
	ShipDate           *time.Time                                        `json:"ship_date,omitempty"`
	ShipFrom           *Address                                          `json:"ship_from,omitempty"`
	ShipTo             *Address                                          `json:"ship_to,omitempty"`
	WarehouseID        map[string]interface{}                            `json:"warehouse_id,omitempty"`
}

// PartialShipment
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type PartialShipment struct {
	AdvancedOptions    *AdvancedShipmentOptions                     `json:"advanced_options,omitempty"`
	CarrierID          *string                                      `json:"carrier_id,omitempty"`
	Confirmation       map[string]interface{}                       `json:"confirmation,omitempty"`
	CreatedAt          map[string]interface{}                       `json:"created_at,omitempty"`
	Customs            *PartialShipmentInternationalShipmentOptions `json:"customs,omitempty"`
	ExternalOrderID    *string                                      `json:"external_order_id,omitempty"`
	ExternalShipmentID *string                                      `json:"external_shipment_id,omitempty"`
	InsuranceProvider  map[string]interface{}                       `json:"insurance_provider,omitempty"`
	Items              []ShipmentItem                               `json:"items,omitempty"`
	ModifiedAt         map[string]interface{}                       `json:"modified_at,omitempty"`
	OrderSourceCode    *OrderSourceNameEnum                         `json:"order_source_code,omitempty"`
	Packages           []Package                                    `json:"packages,omitempty"`
	ReturnTo           *Address                                     `json:"return_to,omitempty"`
	ServiceCode        *string                                      `json:"service_code,omitempty"`
	ShipDate           *time.Time                                   `json:"ship_date,omitempty"`
	ShipFrom           *Address                                     `json:"ship_from,omitempty"`
	ShipTo             *Address                                     `json:"ship_to,omitempty"`
	ShipmentID         map[string]interface{}                       `json:"shipment_id,omitempty"`
	ShipmentStatus     map[string]interface{}                       `json:"shipment_status,omitempty"`
	Tags               []Tag                                        `json:"tags,omitempty"`
	TotalWeight        *PartialShipmentWeight                       `json:"total_weight,omitempty"`
	WarehouseID        map[string]interface{}                       `json:"warehouse_id,omitempty"`
}
