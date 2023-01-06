package shared

type CodeScanningAlertDismissedReasonEnum string

const (
	CodeScanningAlertDismissedReasonEnumUnknown       CodeScanningAlertDismissedReasonEnum = ""
	CodeScanningAlertDismissedReasonEnumFalsePositive CodeScanningAlertDismissedReasonEnum = "false positive"
	CodeScanningAlertDismissedReasonEnumWonTFix       CodeScanningAlertDismissedReasonEnum = "won't fix"
	CodeScanningAlertDismissedReasonEnumUsedInTests   CodeScanningAlertDismissedReasonEnum = "used in tests"
)
