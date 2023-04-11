import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCoordinate } from "./googlecloudintegrationsv1alphacoordinate";
import { GoogleCloudIntegrationsV1alphaEventParameter } from "./googlecloudintegrationsv1alphaeventparameter";
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
import { GoogleCloudIntegrationsV1alphaSuccessPolicy } from "./googlecloudintegrationsv1alphasuccesspolicy";
/**
 * Optional. External task type of the task
 */
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigExternalTaskTypeEnum {
    ExternalTaskTypeUnspecified = "EXTERNAL_TASK_TYPE_UNSPECIFIED",
    NormalTask = "NORMAL_TASK",
    ErrorTask = "ERROR_TASK"
}
/**
 * Optional. If set, overrides the option configured in the Task implementation class.
 */
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum {
    JsonValidationOptionUnspecified = "JSON_VALIDATION_OPTION_UNSPECIFIED",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
/**
 * Optional. The policy dictating the execution of the next set of tasks for the current task.
 */
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
/**
 * Optional. The policy dictating the execution strategy of this task.
 */
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum {
    TaskExecutionStrategyUnspecified = "TASK_EXECUTION_STRATEGY_UNSPECIFIED",
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
 */
export declare class GoogleCloudIntegrationsV1alphaTaskConfig extends SpeakeasyBase {
    /**
     * Optional. User-provided description intended to give additional business context about the task.
     */
    description?: string;
    /**
     * Optional. User-provided label that is attached to this TaskConfig in the UI.
     */
    displayName?: string;
    /**
     * Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string;
    /**
     * Optional. External task type of the task
     */
    externalTaskType?: GoogleCloudIntegrationsV1alphaTaskConfigExternalTaskTypeEnum;
    /**
     * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
     */
    failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;
    /**
     * Optional. If set, overrides the option configured in the Task implementation class.
     */
    jsonValidationOption?: GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;
    /**
     * Optional. The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true.
     */
    nextTasks?: GoogleCloudIntegrationsV1alphaNextTask[];
    /**
     * Optional. The policy dictating the execution of the next set of tasks for the current task.
     */
    nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;
    /**
     * Optional. The customized parameters the user can pass to this task.
     */
    parameters?: Record<string, GoogleCloudIntegrationsV1alphaEventParameter>;
    /**
     * Configuration detail of coordinate, it used for UI
     */
    position?: GoogleCloudIntegrationsV1alphaCoordinate;
    /**
     * Policy that dictates the behavior for the task after it completes successfully.
     */
    successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy;
    /**
     * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
     */
    synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;
    /**
     * Optional. The name for the task.
     */
    task?: string;
    /**
     * Optional. The policy dictating the execution strategy of this task.
     */
    taskExecutionStrategy?: GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;
    /**
     * Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_id`).
     */
    taskId?: string;
    /**
     * Optional. Used to define task-template name if task is of type task-template
     */
    taskTemplate?: string;
}
