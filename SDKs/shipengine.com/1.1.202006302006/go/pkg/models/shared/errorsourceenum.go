package shared

type ErrorSourceEnum string

const (
	ErrorSourceEnumCarrier     ErrorSourceEnum = "carrier"
	ErrorSourceEnumOrderSource ErrorSourceEnum = "order_source"
	ErrorSourceEnumShipengine  ErrorSourceEnum = "shipengine"
)
