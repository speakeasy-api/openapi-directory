import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded.
 */
export declare enum VerifyJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND",
    CloudBuildRequestFailed = "CLOUD_BUILD_REQUEST_FAILED"
}
/**
 * VerifyJobRun contains information specific to a verify `JobRun`.
 */
export declare class VerifyJobRun extends SpeakeasyBase {
    /**
     * Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log.
     */
    artifactUri?: string;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is projects/{project}/locations/{location}/builds/{build}.
     */
    build?: string;
    /**
     * Output only. File path of the Skaffold event log relative to the artifact URI.
     */
    eventLogPath?: string;
    /**
     * Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded.
     */
    failureCause?: VerifyJobRunFailureCauseEnum;
    /**
     * Output only. Additional information about the verify failure, if available.
     */
    failureMessage?: string;
}
