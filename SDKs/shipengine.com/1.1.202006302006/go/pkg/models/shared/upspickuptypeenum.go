package shared

type UpsPickupTypeEnum string

const (
	UpsPickupTypeEnumDailyPickup      UpsPickupTypeEnum = "daily_pickup"
	UpsPickupTypeEnumOccasionalPickup UpsPickupTypeEnum = "occasional_pickup"
	UpsPickupTypeEnumCustomerCounter  UpsPickupTypeEnum = "customer_counter"
)
