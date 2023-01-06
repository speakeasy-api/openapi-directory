package shared

type SecretScanningAlertResolutionEnum string

const (
	SecretScanningAlertResolutionEnumNull          SecretScanningAlertResolutionEnum = "null"
	SecretScanningAlertResolutionEnumFalsePositive SecretScanningAlertResolutionEnum = "false_positive"
	SecretScanningAlertResolutionEnumWontFix       SecretScanningAlertResolutionEnum = "wont_fix"
	SecretScanningAlertResolutionEnumRevoked       SecretScanningAlertResolutionEnum = "revoked"
	SecretScanningAlertResolutionEnumUsedInTests   SecretScanningAlertResolutionEnum = "used_in_tests"
)
