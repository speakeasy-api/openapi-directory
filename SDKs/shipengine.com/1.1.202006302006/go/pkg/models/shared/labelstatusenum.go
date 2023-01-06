package shared

type LabelStatusEnum string

const (
	LabelStatusEnumProcessing LabelStatusEnum = "processing"
	LabelStatusEnumCompleted  LabelStatusEnum = "completed"
	LabelStatusEnumError      LabelStatusEnum = "error"
	LabelStatusEnumVoided     LabelStatusEnum = "voided"
)
