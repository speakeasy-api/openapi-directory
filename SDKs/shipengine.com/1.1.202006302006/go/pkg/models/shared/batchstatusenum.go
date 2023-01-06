package shared

type BatchStatusEnum string

const (
	BatchStatusEnumOpen                BatchStatusEnum = "open"
	BatchStatusEnumQueued              BatchStatusEnum = "queued"
	BatchStatusEnumProcessing          BatchStatusEnum = "processing"
	BatchStatusEnumCompleted           BatchStatusEnum = "completed"
	BatchStatusEnumCompletedWithErrors BatchStatusEnum = "completed_with_errors"
	BatchStatusEnumArchived            BatchStatusEnum = "archived"
	BatchStatusEnumNotifying           BatchStatusEnum = "notifying"
	BatchStatusEnumInvalid             BatchStatusEnum = "invalid"
)
