package shared

type EventTypeEnum string

const (
	EventTypeEnumAccount         EventTypeEnum = "account"
	EventTypeEnumMessageStatus   EventTypeEnum = "messageStatus"
	EventTypeEnumMessageIncoming EventTypeEnum = "messageIncoming"
)
