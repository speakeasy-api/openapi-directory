/**
 * Event type:
 *
 * @remarks
 * - `user_created` new user added to account
 * - `user_deleted` user deleted from account
 * - `target_created` new target added to account
 * - `target_deleted` target deleted from account
 * - `target_verified` target ownership verified
 * - `target_verification_failed` target ownership verification failed
 * - `scan_started` scan started on target
 * - `scan_canceled` scan on target canceled
 * - `scan_completed` scan finished with successfuly
 * - `scan_failed` scan finished unsuccessfuly
 * - `finding_detected` new finding detected (not found before)
 * - `finding_fixed` finding was fixed
 *
 */
export declare enum EventTypeEnum {
    UserCreated = "user_created",
    UserDeleted = "user_deleted",
    TargetCreated = "target_created",
    TargetDeleted = "target_deleted",
    TargetVerified = "target_verified",
    TargetVerificationFailed = "target_verification_failed",
    ScanStarted = "scan_started",
    ScanCanceled = "scan_canceled",
    ScanCompleted = "scan_completed",
    ScanFailed = "scan_failed",
    FindingDetected = "finding_detected",
    FindingFixed = "finding_fixed"
}
