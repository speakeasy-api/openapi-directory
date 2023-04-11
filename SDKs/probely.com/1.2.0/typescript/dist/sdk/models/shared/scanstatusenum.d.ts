/**
 * Current scan status:
 *
 * @remarks
 *   * queued - Scan queued to start
 *   * started - Scan currently running
 *   * under_review - Scan is complete but we need to verify some findings
 *   * completed - Scan complete
 *   * completed_with_errors - Scan complete with error(s) in non essential modules
 *   * failed - Something went seriously wrong during the scan
 *   * canceled - Scan was canceled
 *   * canceling - Stopping scan
 *
 */
export declare enum ScanStatusEnum {
    Queued = "queued",
    Started = "started",
    UnderReview = "under_review",
    Completed = "completed",
    CompletedWithErrors = "completed_with_errors",
    Failed = "failed",
    Canceled = "canceled",
    Canceling = "canceling"
}
