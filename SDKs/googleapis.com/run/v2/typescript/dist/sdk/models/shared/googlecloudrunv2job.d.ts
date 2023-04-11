import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2ExecutionReference } from "./googlecloudrunv2executionreference";
import { GoogleCloudRunV2ExecutionTemplate } from "./googlecloudrunv2executiontemplate";
/**
 * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
 */
export declare enum GoogleCloudRunV2JobLaunchStageEnum {
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
 * Job represents the configuration of a single job, which references a container image that is run to completion.
 */
export declare class GoogleCloudRunV2Job extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Record<string, string>;
    /**
     * Settings for Binary Authorization feature.
     */
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string;
    /**
     * Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    conditions?: GoogleCloudRunV2Condition[];
    /**
     * Output only. The creation time.
     */
    createTime?: string;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string;
    /**
     * Output only. The deletion time.
     */
    deleteTime?: string;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Output only. Number of executions created for this job.
     */
    executionCount?: number;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted.
     */
    expireTime?: string;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string;
    /**
     * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.
     */
    labels?: Record<string, string>;
    /**
     * Output only. Email address of the last authenticated modifier.
     */
    lastModifier?: string;
    /**
     * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
     */
    latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;
    /**
     * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: GoogleCloudRunV2JobLaunchStageEnum;
    /**
     * The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job}
     */
    name?: string;
    /**
     * Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string;
    /**
     * Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`.
     */
    reconciling?: boolean;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * ExecutionTemplate describes the data an execution should have when created from a template.
     */
    template?: GoogleCloudRunV2ExecutionTemplate;
    /**
     * Defines a status condition for a resource.
     */
    terminalCondition?: GoogleCloudRunV2Condition;
    /**
     * Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
}
/**
 * Job represents the configuration of a single job, which references a container image that is run to completion.
 */
export declare class GoogleCloudRunV2JobInput extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Record<string, string>;
    /**
     * Settings for Binary Authorization feature.
     */
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string;
    /**
     * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.
     */
    labels?: Record<string, string>;
    /**
     * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
     */
    latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;
    /**
     * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: GoogleCloudRunV2JobLaunchStageEnum;
    /**
     * The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job}
     */
    name?: string;
    /**
     * ExecutionTemplate describes the data an execution should have when created from a template.
     */
    template?: GoogleCloudRunV2ExecutionTemplate;
    /**
     * Defines a status condition for a resource.
     */
    terminalCondition?: GoogleCloudRunV2Condition;
}
