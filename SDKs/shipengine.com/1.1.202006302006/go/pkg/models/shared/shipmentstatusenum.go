package shared

type ShipmentStatusEnum string

const (
	ShipmentStatusEnumPending        ShipmentStatusEnum = "pending"
	ShipmentStatusEnumProcessing     ShipmentStatusEnum = "processing"
	ShipmentStatusEnumLabelPurchased ShipmentStatusEnum = "label_purchased"
	ShipmentStatusEnumCancelled      ShipmentStatusEnum = "cancelled"
)
