import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reason for the execution condition.
 */
export declare enum GoogleCloudRunV2ConditionExecutionReasonEnum {
    ExecutionReasonUndefined = "EXECUTION_REASON_UNDEFINED",
    JobStatusServicePollingError = "JOB_STATUS_SERVICE_POLLING_ERROR",
    NonZeroExitCode = "NON_ZERO_EXIT_CODE",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING"
}
/**
 * A common (service-level) reason for this condition.
 */
export declare enum GoogleCloudRunV2ConditionReasonEnum {
    CommonReasonUndefined = "COMMON_REASON_UNDEFINED",
    Unknown = "UNKNOWN",
    RevisionFailed = "REVISION_FAILED",
    ProgressDeadlineExceeded = "PROGRESS_DEADLINE_EXCEEDED",
    ContainerMissing = "CONTAINER_MISSING",
    ContainerPermissionDenied = "CONTAINER_PERMISSION_DENIED",
    ContainerImageUnauthorized = "CONTAINER_IMAGE_UNAUTHORIZED",
    ContainerImageAuthorizationCheckFailed = "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED",
    EncryptionKeyPermissionDenied = "ENCRYPTION_KEY_PERMISSION_DENIED",
    EncryptionKeyCheckFailed = "ENCRYPTION_KEY_CHECK_FAILED",
    SecretsAccessCheckFailed = "SECRETS_ACCESS_CHECK_FAILED",
    WaitingForOperation = "WAITING_FOR_OPERATION",
    ImmediateRetry = "IMMEDIATE_RETRY",
    PostponedRetry = "POSTPONED_RETRY",
    Internal = "INTERNAL"
}
/**
 * A reason for the revision condition.
 */
export declare enum GoogleCloudRunV2ConditionRevisionReasonEnum {
    RevisionReasonUndefined = "REVISION_REASON_UNDEFINED",
    Pending = "PENDING",
    Reserve = "RESERVE",
    Retired = "RETIRED",
    Retiring = "RETIRING",
    Recreating = "RECREATING",
    HealthCheckContainerError = "HEALTH_CHECK_CONTAINER_ERROR",
    CustomizedPathResponsePending = "CUSTOMIZED_PATH_RESPONSE_PENDING",
    MinInstancesNotProvisioned = "MIN_INSTANCES_NOT_PROVISIONED",
    ActiveRevisionLimitReached = "ACTIVE_REVISION_LIMIT_REACHED",
    NoDeployment = "NO_DEPLOYMENT",
    HealthCheckSkipped = "HEALTH_CHECK_SKIPPED",
    MinInstancesWarming = "MIN_INSTANCES_WARMING"
}
/**
 * How to interpret failures of this condition, one of Error, Warning, Info
 */
export declare enum GoogleCloudRunV2ConditionSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * State of the condition.
 */
export declare enum GoogleCloudRunV2ConditionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    ConditionPending = "CONDITION_PENDING",
    ConditionReconciling = "CONDITION_RECONCILING",
    ConditionFailed = "CONDITION_FAILED",
    ConditionSucceeded = "CONDITION_SUCCEEDED"
}
/**
 * Defines a status condition for a resource.
 */
export declare class GoogleCloudRunV2Condition extends SpeakeasyBase {
    /**
     * A reason for the execution condition.
     */
    executionReason?: GoogleCloudRunV2ConditionExecutionReasonEnum;
    /**
     * Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;
    /**
     * Human readable message indicating details about the current status.
     */
    message?: string;
    /**
     * A common (service-level) reason for this condition.
     */
    reason?: GoogleCloudRunV2ConditionReasonEnum;
    /**
     * A reason for the revision condition.
     */
    revisionReason?: GoogleCloudRunV2ConditionRevisionReasonEnum;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: GoogleCloudRunV2ConditionSeverityEnum;
    /**
     * State of the condition.
     */
    state?: GoogleCloudRunV2ConditionStateEnum;
    /**
     * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.
     */
    type?: string;
}
