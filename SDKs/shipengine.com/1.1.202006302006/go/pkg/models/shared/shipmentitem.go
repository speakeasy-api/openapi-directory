package shared

// ShipmentItem
// A shipment item
type ShipmentItem struct {
	Asin                *string              `json:"asin,omitempty"`
	ExternalOrderID     *string              `json:"external_order_id,omitempty"`
	ExternalOrderItemID *string              `json:"external_order_item_id,omitempty"`
	Name                *string              `json:"name,omitempty"`
	OrderSourceCode     *OrderSourceNameEnum `json:"order_source_code,omitempty"`
	Quantity            *int32               `json:"quantity,omitempty"`
	SalesOrderID        *string              `json:"sales_order_id,omitempty"`
	SalesOrderItemID    *string              `json:"sales_order_item_id,omitempty"`
	Sku                 *string              `json:"sku,omitempty"`
}
