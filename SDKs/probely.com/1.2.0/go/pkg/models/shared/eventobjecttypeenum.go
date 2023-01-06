package shared

type EventObjectTypeEnum string

const (
	EventObjectTypeEnumUser    EventObjectTypeEnum = "user"
	EventObjectTypeEnumTarget  EventObjectTypeEnum = "target"
	EventObjectTypeEnumScan    EventObjectTypeEnum = "scan"
	EventObjectTypeEnumFinding EventObjectTypeEnum = "finding"
)
