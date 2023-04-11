/**
 * **Required when the `state` is `resolved`.** The reason for resolving the alert.
 */
export declare enum SecretScanningAlertResolutionEnum {
    Null = "null",
    FalsePositive = "false_positive",
    WontFix = "wont_fix",
    Revoked = "revoked",
    UsedInTests = "used_in_tests"
}
