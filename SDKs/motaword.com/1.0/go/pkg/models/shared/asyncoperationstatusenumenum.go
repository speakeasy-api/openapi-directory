package shared

type AsyncOperationStatusEnumEnum string

const (
	AsyncOperationStatusEnumEnumSent      AsyncOperationStatusEnumEnum = "sent"
	AsyncOperationStatusEnumEnumStarted   AsyncOperationStatusEnumEnum = "started"
	AsyncOperationStatusEnumEnumCompleted AsyncOperationStatusEnumEnum = "completed"
	AsyncOperationStatusEnumEnumFailed    AsyncOperationStatusEnumEnum = "failed"
)
