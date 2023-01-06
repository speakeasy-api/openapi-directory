package shared

import (
	"time"
)

// ListShipmentsResponseBodyPaginationLink
// Helpful links to other pages of results
type ListShipmentsResponseBodyPaginationLink struct {
	First Link         `json:"first"`
	Last  Link         `json:"last"`
	Next  OptionalLink `json:"next"`
	Prev  OptionalLink `json:"prev"`
}

// ListShipmentsResponseBodyPartialShipmentInternationalShipmentOptions
// Options for international shipments, such as customs declarations.
type ListShipmentsResponseBodyPartialShipmentInternationalShipmentOptions struct {
	Contents     map[string]interface{} `json:"contents"`
	CustomsItems []CustomsItem          `json:"customs_items,omitempty"`
	NonDelivery  map[string]interface{} `json:"non_delivery"`
}

// ListShipmentsResponseBodyPartialShipmentWeight
// The weight of a package
type ListShipmentsResponseBodyPartialShipmentWeight struct {
	Unit  WeightUnitEnum `json:"unit"`
	Value float64        `json:"value"`
}

// ListShipmentsResponseBodyPartialShipment
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type ListShipmentsResponseBodyPartialShipment struct {
	AdvancedOptions    AdvancedShipmentOptions                                              `json:"advanced_options"`
	CarrierID          string                                                               `json:"carrier_id"`
	Confirmation       map[string]interface{}                                               `json:"confirmation"`
	CreatedAt          map[string]interface{}                                               `json:"created_at"`
	Customs            ListShipmentsResponseBodyPartialShipmentInternationalShipmentOptions `json:"customs"`
	ExternalOrderID    *string                                                              `json:"external_order_id,omitempty"`
	ExternalShipmentID *string                                                              `json:"external_shipment_id,omitempty"`
	InsuranceProvider  map[string]interface{}                                               `json:"insurance_provider"`
	Items              []ShipmentItem                                                       `json:"items,omitempty"`
	ModifiedAt         map[string]interface{}                                               `json:"modified_at"`
	OrderSourceCode    *OrderSourceNameEnum                                                 `json:"order_source_code,omitempty"`
	Packages           []Package                                                            `json:"packages"`
	ReturnTo           Address                                                              `json:"return_to"`
	ServiceCode        string                                                               `json:"service_code"`
	ShipDate           time.Time                                                            `json:"ship_date"`
	ShipFrom           Address                                                              `json:"ship_from"`
	ShipTo             Address                                                              `json:"ship_to"`
	ShipmentID         map[string]interface{}                                               `json:"shipment_id"`
	ShipmentStatus     map[string]interface{}                                               `json:"shipment_status"`
	Tags               []Tag                                                                `json:"tags"`
	TotalWeight        ListShipmentsResponseBodyPartialShipmentWeight                       `json:"total_weight"`
	WarehouseID        map[string]interface{}                                               `json:"warehouse_id"`
}

// ListShipmentsResponseBody
// A list shipment response body
type ListShipmentsResponseBody struct {
	Links     ListShipmentsResponseBodyPaginationLink    `json:"links"`
	Page      int32                                      `json:"page"`
	Pages     int32                                      `json:"pages"`
	Shipments []ListShipmentsResponseBodyPartialShipment `json:"shipments"`
	Total     int64                                      `json:"total"`
}
