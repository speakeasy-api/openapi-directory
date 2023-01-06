package shared

import (
	"time"
)

// CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput
// Options for international shipments, such as customs declarations.
type CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput struct {
	Contents     map[string]interface{} `json:"contents"`
	CustomsItems []CustomsItemInput     `json:"customs_items,omitempty"`
	NonDelivery  map[string]interface{} `json:"non_delivery"`
}

// CreateLabelRequestBodyPartialShipmentInput
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type CreateLabelRequestBodyPartialShipmentInput struct {
	AdvancedOptions    AdvancedShipmentOptions                                                `json:"advanced_options"`
	CarrierID          string                                                                 `json:"carrier_id"`
	Confirmation       map[string]interface{}                                                 `json:"confirmation"`
	Customs            CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput `json:"customs"`
	ExternalOrderID    *string                                                                `json:"external_order_id,omitempty"`
	ExternalShipmentID *string                                                                `json:"external_shipment_id,omitempty"`
	InsuranceProvider  map[string]interface{}                                                 `json:"insurance_provider"`
	Items              []ShipmentItem                                                         `json:"items,omitempty"`
	OrderSourceCode    *OrderSourceNameEnum                                                   `json:"order_source_code,omitempty"`
	Packages           []PackageInput                                                         `json:"packages"`
	ReturnTo           Address                                                                `json:"return_to"`
	ServiceCode        string                                                                 `json:"service_code"`
	ShipDate           time.Time                                                              `json:"ship_date"`
	ShipFrom           Address                                                                `json:"ship_from"`
	ShipTo             Address                                                                `json:"ship_to"`
	WarehouseID        map[string]interface{}                                                 `json:"warehouse_id"`
}

// CreateLabelRequestBodyInput
// A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
type CreateLabelRequestBodyInput struct {
	ChargeEvent       *LabelChargeEventEnum                      `json:"charge_event,omitempty"`
	IsReturnLabel     *bool                                      `json:"is_return_label,omitempty"`
	LabelDownloadType map[string]interface{}                     `json:"label_download_type,omitempty"`
	LabelFormat       map[string]interface{}                     `json:"label_format,omitempty"`
	LabelImageID      map[string]interface{}                     `json:"label_image_id,omitempty"`
	LabelLayout       map[string]interface{}                     `json:"label_layout,omitempty"`
	OutboundLabelID   map[string]interface{}                     `json:"outbound_label_id,omitempty"`
	RmaNumber         *string                                    `json:"rma_number,omitempty"`
	Shipment          CreateLabelRequestBodyPartialShipmentInput `json:"shipment"`
	TestLabel         *bool                                      `json:"test_label,omitempty"`
	ValidateAddress   map[string]interface{}                     `json:"validate_address,omitempty"`
}
