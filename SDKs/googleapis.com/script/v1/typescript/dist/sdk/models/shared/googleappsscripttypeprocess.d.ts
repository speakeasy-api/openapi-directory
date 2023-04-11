import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The executions status.
 */
export declare enum GoogleAppsScriptTypeProcessProcessStatusEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Unknown = "UNKNOWN",
    Delayed = "DELAYED"
}
/**
 * The executions type.
 */
export declare enum GoogleAppsScriptTypeProcessProcessTypeEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED",
    AddOn = "ADD_ON",
    ExecutionApi = "EXECUTION_API",
    TimeDriven = "TIME_DRIVEN",
    Trigger = "TRIGGER",
    Webapp = "WEBAPP",
    Editor = "EDITOR",
    SimpleTrigger = "SIMPLE_TRIGGER",
    Menu = "MENU",
    BatchTask = "BATCH_TASK"
}
/**
 * The executing users access level to the script.
 */
export declare enum GoogleAppsScriptTypeProcessUserAccessLevelEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}
/**
 * Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
 */
export declare class GoogleAppsScriptTypeProcess extends SpeakeasyBase {
    /**
     * Duration the execution spent executing.
     */
    duration?: string;
    /**
     * Name of the function the started the execution.
     */
    functionName?: string;
    /**
     * The executions status.
     */
    processStatus?: GoogleAppsScriptTypeProcessProcessStatusEnum;
    /**
     * The executions type.
     */
    processType?: GoogleAppsScriptTypeProcessProcessTypeEnum;
    /**
     * Name of the script being executed.
     */
    projectName?: string;
    /**
     * Time the execution started.
     */
    startTime?: string;
    /**
     * The executing users access level to the script.
     */
    userAccessLevel?: GoogleAppsScriptTypeProcessUserAccessLevelEnum;
}
