package shared

type OperationStatusEnum string

const (
	OperationStatusEnumNotStarted OperationStatusEnum = "NotStarted"
	OperationStatusEnumRunning    OperationStatusEnum = "Running"
	OperationStatusEnumFailed     OperationStatusEnum = "Failed"
	OperationStatusEnumSucceeded  OperationStatusEnum = "Succeeded"
)
