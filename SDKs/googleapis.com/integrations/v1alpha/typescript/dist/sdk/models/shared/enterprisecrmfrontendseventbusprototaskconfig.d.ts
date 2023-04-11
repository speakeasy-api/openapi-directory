import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoSuccessPolicy } from "./enterprisecrmeventbusprotosuccesspolicy";
import { EnterpriseCrmEventbusProtoTaskAlertConfig } from "./enterprisecrmeventbusprototaskalertconfig";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmFrontendsEventbusProtoRollbackStrategy } from "./enterprisecrmfrontendseventbusprotorollbackstrategy";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum {
    ExternalTaskTypeUnspecified = "EXTERNAL_TASK_TYPE_UNSPECIFIED",
    NormalTask = "NORMAL_TASK",
    ErrorTask = "ERROR_TASK"
}
/**
 * If set, overrides the option configured in the Task implementation class.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
/**
 * The policy dictating the execution of the next set of tasks for the current task.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
/**
 * The policy dictating the execution strategy of this task.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum {
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}
/**
 * Defines the type of the task
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
 */
export declare class EnterpriseCrmFrontendsEventbusProtoTaskConfig extends SpeakeasyBase {
    /**
     * Alert configurations on error rate, warning rate, number of runs, durations, etc.
     */
    alertConfigs?: EnterpriseCrmEventbusProtoTaskAlertConfig[];
    /**
     * Auto-generated.
     */
    createTime?: string;
    /**
     * The creator's email address. Auto-generated from the user's email.
     */
    creatorEmail?: string;
    /**
     * User-provided description intended to give more business context about the task.
     */
    description?: string;
    /**
     * If this config contains a TypedTask, allow validation to succeed if an input is read from the output of another TypedTask whose output type is declared as a superclass of the requested input type. For instance, if the previous task declares an output of type Message, any task with this flag enabled will pass validation when attempting to read any proto Message type from the resultant Event parameter.
     */
    disableStrictTypeValidation?: boolean;
    /**
     * Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string;
    externalTaskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum;
    /**
     * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
     */
    failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;
    /**
     * The number of edges leading into this TaskConfig.
     */
    incomingEdgeCount?: number;
    /**
     * If set, overrides the option configured in the Task implementation class.
     */
    jsonValidationOption?: EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
    /**
     * User-provided label that is attached to this TaskConfig in the UI.
     */
    label?: string;
    /**
     * Auto-generated.
     */
    lastModifiedTime?: string;
    /**
     * The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true.
     */
    nextTasks?: EnterpriseCrmEventbusProtoNextTask[];
    /**
     * The policy dictating the execution of the next set of tasks for the current task.
     */
    nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
    /**
     * The customized parameters the user can pass to this task.
     */
    parameters?: Record<string, EnterpriseCrmFrontendsEventbusProtoParameterEntry>;
    /**
     * Represents two-dimensional positions.
     */
    position?: EnterpriseCrmEventbusProtoCoordinate;
    /**
     * Optional. Standard filter expression evaluated before execution. Independent of other conditions and tasks. Can be used to enable rollout. e.g. "rollout(5)" will only allow 5% of incoming traffic to task.
     */
    precondition?: string;
    /**
     * Optional. User-provided label that is attached to precondition in the UI.
     */
    preconditionLabel?: string;
    /**
     * Next available id: 4
     */
    rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;
    /**
     * Policy that dictates the behavior for the task after it completes successfully.
     */
    successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy;
    /**
     * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
     */
    synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;
    /**
     * Contains a task's metadata and associated information. Next available id: 7
     */
    taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity;
    /**
     * The policy dictating the execution strategy of this task.
     */
    taskExecutionStrategy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
    /**
     * The name for the task.
     */
    taskName?: string;
    /**
     * REQUIRED: the identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_number`).
     */
    taskNumber?: string;
    /**
     * A string template that allows user to configure task parameters (with either literal default values or tokens which will be resolved at execution time) for the task. It will eventually replace the old "parameters" field.
     */
    taskSpec?: string;
    /**
     * Used to define task-template name if task is of type task-template
     */
    taskTemplateName?: string;
    /**
     * Defines the type of the task
     */
    taskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
}
