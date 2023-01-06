package shared

type EventTypeEnum string

const (
	EventTypeEnumUserCreated              EventTypeEnum = "user_created"
	EventTypeEnumUserDeleted              EventTypeEnum = "user_deleted"
	EventTypeEnumTargetCreated            EventTypeEnum = "target_created"
	EventTypeEnumTargetDeleted            EventTypeEnum = "target_deleted"
	EventTypeEnumTargetVerified           EventTypeEnum = "target_verified"
	EventTypeEnumTargetVerificationFailed EventTypeEnum = "target_verification_failed"
	EventTypeEnumScanStarted              EventTypeEnum = "scan_started"
	EventTypeEnumScanCanceled             EventTypeEnum = "scan_canceled"
	EventTypeEnumScanCompleted            EventTypeEnum = "scan_completed"
	EventTypeEnumScanFailed               EventTypeEnum = "scan_failed"
	EventTypeEnumFindingDetected          EventTypeEnum = "finding_detected"
	EventTypeEnumFindingFixed             EventTypeEnum = "finding_fixed"
)
