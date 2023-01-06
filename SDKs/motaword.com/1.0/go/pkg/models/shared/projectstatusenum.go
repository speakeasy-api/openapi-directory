package shared

type ProjectStatusEnum string

const (
	ProjectStatusEnumPending    ProjectStatusEnum = "pending"
	ProjectStatusEnumStarted    ProjectStatusEnum = "started"
	ProjectStatusEnumCompleted  ProjectStatusEnum = "completed"
	ProjectStatusEnumTranslated ProjectStatusEnum = "translated"
	ProjectStatusEnumProofread  ProjectStatusEnum = "proofread"
)
