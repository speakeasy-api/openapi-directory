// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ShipmentInvoiceLineItemInvoice struct {
	// ID of the line item. Either lineItemId or productId must be set.
	LineItemID *string `json:"lineItemId,omitempty"`
	// ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.
	ProductID *string `json:"productId,omitempty"`
	// [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units).
	ShipmentUnitIds []string     `json:"shipmentUnitIds,omitempty"`
	UnitInvoice     *UnitInvoice `json:"unitInvoice,omitempty"`
}
