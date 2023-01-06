package shared

type FedexPickupTypeEnum string

const (
	FedexPickupTypeEnumNone                  FedexPickupTypeEnum = "none"
	FedexPickupTypeEnumRegularPickup         FedexPickupTypeEnum = "regular_pickup"
	FedexPickupTypeEnumRequestCourier        FedexPickupTypeEnum = "request_courier"
	FedexPickupTypeEnumDropBox               FedexPickupTypeEnum = "drop_box"
	FedexPickupTypeEnumBusinessServiceCenter FedexPickupTypeEnum = "business_service_center"
	FedexPickupTypeEnumStation               FedexPickupTypeEnum = "station"
)
