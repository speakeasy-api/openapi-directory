import { SpeakeasyBase } from "../../../internal/utils";
import { DeployJobRunMetadata } from "./deployjobrunmetadata";
/**
 * Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded.
 */
export declare enum DeployJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    MissingResourcesForCanary = "MISSING_RESOURCES_FOR_CANARY",
    CloudBuildRequestFailed = "CLOUD_BUILD_REQUEST_FAILED"
}
/**
 * DeployJobRun contains information specific to a deploy `JobRun`.
 */
export declare class DeployJobRun extends SpeakeasyBase {
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is projects/{project}/locations/{location}/builds/{build}.
     */
    build?: string;
    /**
     * Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded.
     */
    failureCause?: DeployJobRunFailureCauseEnum;
    /**
     * Output only. Additional information about the deploy failure, if available.
     */
    failureMessage?: string;
    /**
     * DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
     */
    metadata?: DeployJobRunMetadata;
}
