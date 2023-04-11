import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Phase } from "./phase";
/**
 * Output only. Approval state of the `Rollout`.
 */
export declare enum RolloutApprovalStateEnum {
    ApprovalStateUnspecified = "APPROVAL_STATE_UNSPECIFIED",
    NeedsApproval = "NEEDS_APPROVAL",
    DoesNotNeedApproval = "DOES_NOT_NEED_APPROVAL",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
/**
 * Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.
 */
export declare enum RolloutDeployFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    ReleaseFailed = "RELEASE_FAILED",
    ReleaseAbandoned = "RELEASE_ABANDONED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND",
    CloudBuildRequestFailed = "CLOUD_BUILD_REQUEST_FAILED"
}
/**
 * Output only. Current state of the `Rollout`.
 */
export declare enum RolloutStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    PendingApproval = "PENDING_APPROVAL",
    ApprovalRejected = "APPROVAL_REJECTED",
    Pending = "PENDING",
    PendingRelease = "PENDING_RELEASE",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Halted = "HALTED"
}
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
 */
export declare class Rollout extends SpeakeasyBase {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Approval state of the `Rollout`.
     */
    approvalState?: RolloutApprovalStateEnum;
    /**
     * Output only. Time at which the `Rollout` was approved.
     */
    approveTime?: string;
    /**
     * Output only. Name of the `ControllerRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.
     */
    controllerRollout?: string;
    /**
     * Output only. Time at which the `Rollout` was created.
     */
    createTime?: string;
    /**
     * Output only. Time at which the `Rollout` finished deploying.
     */
    deployEndTime?: string;
    /**
     * Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.
     */
    deployFailureCause?: RolloutDeployFailureCauseEnum;
    /**
     * Output only. Time at which the `Rollout` started deploying.
     */
    deployStartTime?: string;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`.
     */
    deployingBuild?: string;
    /**
     * Description of the `Rollout` for user purposes. Max length is 255 characters.
     */
    description?: string;
    /**
     * Output only. Time at which the `Rollout` was enqueued.
     */
    enqueueTime?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. Additional information about the rollout failure, if available.
     */
    failureReason?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Metadata includes information associated with a `Rollout`.
     */
    metadata?: Metadata;
    /**
     * Optional. Name of the `Rollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.
     */
    name?: string;
    /**
     * Output only. The phases that represent the workflows of this `Rollout`.
     */
    phases?: Phase[];
    /**
     * Output only. Current state of the `Rollout`.
     */
    state?: RolloutStateEnum;
    /**
     * Required. The ID of Target to which this `Rollout` is deploying.
     */
    targetId?: string;
    /**
     * Output only. Unique identifier of the `Rollout`.
     */
    uid?: string;
}
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
 */
export declare class RolloutInput extends SpeakeasyBase {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * Description of the `Rollout` for user purposes. Max length is 255 characters.
     */
    description?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Name of the `Rollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.
     */
    name?: string;
    /**
     * Required. The ID of Target to which this `Rollout` is deploying.
     */
    targetId?: string;
}
