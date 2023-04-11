import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskExecutionSpec } from "./googleclouddataplexv1taskexecutionspec";
import { GoogleCloudDataplexV1TaskExecutionStatus } from "./googleclouddataplexv1taskexecutionstatus";
import { GoogleCloudDataplexV1TaskNotebookTaskConfig } from "./googleclouddataplexv1tasknotebooktaskconfig";
import { GoogleCloudDataplexV1TaskSparkTaskConfig } from "./googleclouddataplexv1tasksparktaskconfig";
import { GoogleCloudDataplexV1TaskTriggerSpec } from "./googleclouddataplexv1tasktriggerspec";
/**
 * Output only. Current state of the task.
 */
export declare enum GoogleCloudDataplexV1TaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * A task represents a user-visible job.
 */
export declare class GoogleCloudDataplexV1Task extends SpeakeasyBase {
    /**
     * Output only. The time when the task was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the task.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Execution related settings, like retry and service_account.
     */
    executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
    /**
     * Status of the task execution (e.g. Jobs).
     */
    executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;
    /**
     * Optional. User-defined labels for the task.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}.
     */
    name?: string;
    /**
     * Config for running scheduled notebooks.
     */
    notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;
    /**
     * User-specified config for running a Spark task.
     */
    spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;
    /**
     * Output only. Current state of the task.
     */
    state?: GoogleCloudDataplexV1TaskStateEnum;
    /**
     * Task scheduling and trigger settings.
     */
    triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
    /**
     * Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the task was last updated.
     */
    updateTime?: string;
}
/**
 * A task represents a user-visible job.
 */
export declare class GoogleCloudDataplexV1TaskInput extends SpeakeasyBase {
    /**
     * Optional. Description of the task.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Execution related settings, like retry and service_account.
     */
    executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
    /**
     * Optional. User-defined labels for the task.
     */
    labels?: Record<string, string>;
    /**
     * Config for running scheduled notebooks.
     */
    notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;
    /**
     * User-specified config for running a Spark task.
     */
    spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;
    /**
     * Task scheduling and trigger settings.
     */
    triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
}
