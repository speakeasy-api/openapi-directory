import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2TaskAttemptResult } from "./googlecloudrunv2taskattemptresult";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
/**
 * The execution environment being used to host this Task.
 */
export declare enum GoogleCloudRunV2TaskExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * Task represents a single run of a container to completion.
 */
export declare class GoogleCloudRunV2Task extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.
     */
    completionTime?: string;
    /**
     * Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.
     */
    conditions?: GoogleCloudRunV2Condition[];
    /**
     * Holds the single container that defines the unit of execution for this task.
     */
    containers?: GoogleCloudRunV2Container[];
    /**
     * Output only. Represents time when the task was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations.
     */
    createTime?: string;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string;
    /**
     * Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Output only. The name of the parent Execution.
     */
    execution?: string;
    /**
     * The execution environment being used to host this Task.
     */
    executionEnvironment?: GoogleCloudRunV2TaskExecutionEnvironmentEnum;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string;
    /**
     * Output only. Index of the Task, unique per execution, and beginning at 0.
     */
    index?: number;
    /**
     * Output only. The name of the parent Job.
     */
    job?: string;
    /**
     * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels
     */
    labels?: Record<string, string>;
    /**
     * Result of a task attempt.
     */
    lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;
    /**
     * Output only. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string;
    /**
     * Number of retries allowed per Task, before marking this Task failed.
     */
    maxRetries?: number;
    /**
     * Output only. The unique name of this Task.
     */
    name?: string;
    /**
     * Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean;
    /**
     * Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.
     */
    retried?: number;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccount?: string;
    /**
     * Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.
     */
    startTime?: string;
    /**
     * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
     */
    timeout?: string;
    /**
     * Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
    /**
     * A list of Volumes to make available to containers.
     */
    volumes?: GoogleCloudRunV2Volume[];
    /**
     * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
     */
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
