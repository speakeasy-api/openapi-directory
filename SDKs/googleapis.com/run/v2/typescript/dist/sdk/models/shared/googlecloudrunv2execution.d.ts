import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";
/**
 * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
 */
export declare enum GoogleCloudRunV2ExecutionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
 */
export declare class GoogleCloudRunV2Execution extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. The number of tasks which reached phase Cancelled.
     */
    cancelledCount?: number;
    /**
     * Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations.
     */
    completionTime?: string;
    /**
     * Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state.
     */
    conditions?: GoogleCloudRunV2Condition[];
    /**
     * Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations.
     */
    createTime?: string;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string;
    /**
     * Output only. The number of tasks which reached phase Failed.
     */
    failedCount?: number;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string;
    /**
     * Output only. The name of the parent Job.
     */
    job?: string;
    /**
     * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels
     */
    labels?: Record<string, string>;
    /**
     * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
     */
    launchStage?: GoogleCloudRunV2ExecutionLaunchStageEnum;
    /**
     * Output only. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string;
    /**
     * Output only. The unique name of this Execution.
     */
    name?: string;
    /**
     * Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string;
    /**
     * Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     */
    parallelism?: number;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean;
    /**
     * Output only. The number of tasks which have retried at least once.
     */
    retriedCount?: number;
    /**
     * Output only. The number of actively running tasks.
     */
    runningCount?: number;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations.
     */
    startTime?: string;
    /**
     * Output only. The number of tasks which reached phase Succeeded.
     */
    succeededCount?: number;
    /**
     * Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     */
    taskCount?: number;
    /**
     * TaskTemplate describes the data a task should have when created from a template.
     */
    template?: GoogleCloudRunV2TaskTemplate;
    /**
     * Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
}
