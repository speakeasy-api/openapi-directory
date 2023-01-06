package shared

type SalesActivityTypeEnum string

const (
	SalesActivityTypeEnumEmail         SalesActivityTypeEnum = "EMAIL"
	SalesActivityTypeEnumNote          SalesActivityTypeEnum = "NOTE"
	SalesActivityTypeEnumIncomingEmail SalesActivityTypeEnum = "INCOMING_EMAIL"
	SalesActivityTypeEnumTask          SalesActivityTypeEnum = "TASK"
)
