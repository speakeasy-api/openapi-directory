package shared

import (
	"time"
)

// UpdateShipmentRequestBodyInternationalShipmentOptionsInput
// Options for international shipments, such as customs declarations.
type UpdateShipmentRequestBodyInternationalShipmentOptionsInput struct {
	Contents     map[string]interface{} `json:"contents"`
	CustomsItems []CustomsItemInput     `json:"customs_items,omitempty"`
	NonDelivery  map[string]interface{} `json:"non_delivery"`
}

// UpdateShipmentRequestBodyInput
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type UpdateShipmentRequestBodyInput struct {
	AdvancedOptions    *AdvancedShipmentOptions                                    `json:"advanced_options,omitempty"`
	CarrierID          *string                                                     `json:"carrier_id,omitempty"`
	Confirmation       map[string]interface{}                                      `json:"confirmation,omitempty"`
	Customs            *UpdateShipmentRequestBodyInternationalShipmentOptionsInput `json:"customs,omitempty"`
	ExternalOrderID    *string                                                     `json:"external_order_id,omitempty"`
	ExternalShipmentID *string                                                     `json:"external_shipment_id,omitempty"`
	InsuranceProvider  map[string]interface{}                                      `json:"insurance_provider,omitempty"`
	Items              []ShipmentItem                                              `json:"items,omitempty"`
	OrderSourceCode    *OrderSourceNameEnum                                        `json:"order_source_code,omitempty"`
	Packages           []PackageInput                                              `json:"packages,omitempty"`
	ReturnTo           *Address                                                    `json:"return_to,omitempty"`
	ServiceCode        *string                                                     `json:"service_code,omitempty"`
	ShipDate           *time.Time                                                  `json:"ship_date,omitempty"`
	ShipFrom           Address                                                     `json:"ship_from"`
	ShipTo             Address                                                     `json:"ship_to"`
	ValidateAddress    map[string]interface{}                                      `json:"validate_address,omitempty"`
	WarehouseID        map[string]interface{}                                      `json:"warehouse_id,omitempty"`
}
