package shared

type ScanStatusEnum string

const (
	ScanStatusEnumQueued              ScanStatusEnum = "queued"
	ScanStatusEnumStarted             ScanStatusEnum = "started"
	ScanStatusEnumUnderReview         ScanStatusEnum = "under_review"
	ScanStatusEnumCompleted           ScanStatusEnum = "completed"
	ScanStatusEnumCompletedWithErrors ScanStatusEnum = "completed_with_errors"
	ScanStatusEnumFailed              ScanStatusEnum = "failed"
	ScanStatusEnumCanceled            ScanStatusEnum = "canceled"
	ScanStatusEnumCanceling           ScanStatusEnum = "canceling"
)
