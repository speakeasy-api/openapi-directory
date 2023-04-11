import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCloudSchedulerConfig } from "./enterprisecrmeventbusprotocloudschedulerconfig";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoTriggerCriteria } from "./enterprisecrmeventbusprototriggercriteria";
import { EnterpriseCrmEventbusProtoWorkflowAlertConfig } from "./enterprisecrmeventbusprotoworkflowalertconfig";
/**
 * Dictates how next tasks will be executed.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum {
    Unknown = "UNKNOWN",
    CloudPubsub = "CLOUD_PUBSUB",
    Goops = "GOOPS",
    SfdcSync = "SFDC_SYNC",
    Cron = "CRON",
    Api = "API",
    ManifoldTrigger = "MANIFOLD_TRIGGER",
    DatalayerDataChange = "DATALAYER_DATA_CHANGE",
    SfdcChannel = "SFDC_CHANNEL",
    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL",
    SfdcCdcChannel = "SFDC_CDC_CHANNEL",
    SfdcPlatformEventsChannel = "SFDC_PLATFORM_EVENTS_CHANNEL",
    CloudScheduler = "CLOUD_SCHEDULER"
}
/**
 * Configuration detail of a trigger. Next available id: 19
 */
export declare class EnterpriseCrmFrontendsEventbusProtoTriggerConfig extends SpeakeasyBase {
    /**
     * An alert threshold configuration for the [trigger + client + workflow] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + workflow] when published.
     */
    alertConfig?: EnterpriseCrmEventbusProtoWorkflowAlertConfig[];
    /**
     * Cloud Scheduler Trigger configuration
     */
    cloudSchedulerConfig?: EnterpriseCrmEventbusProtoCloudSchedulerConfig;
    /**
     * User-provided description intended to give more business context about the task.
     */
    description?: string;
    /**
     * Required. The list of client ids which are enabled to execute the workflow using this trigger. In other words, these clients have the workflow execution privledges for this trigger. For API trigger, the client id in the incoming request is validated against the list of enabled clients. For non-API triggers, one workflow execution is triggered on behalf of each enabled client.
     */
    enabledClients?: string[];
    /**
     * Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string;
    /**
     * The user created label for a particular trigger.
     */
    label?: string;
    /**
     * Dictates how next tasks will be executed.
     */
    nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
    /**
     * Optional. If set to true, any upcoming requests for this trigger config will be paused and the executions will be resumed later when the flag is reset. The workflow to which this trigger config belongs has to be in ACTIVE status for the executions to be paused or resumed.
     */
    pauseWorkflowExecutions?: boolean;
    /**
     * Represents two-dimensional positions.
     */
    position?: EnterpriseCrmEventbusProtoCoordinate;
    /**
     * Configurable properties of the trigger, not to be confused with workflow parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Cloud Pubsub triggers.
     */
    properties?: Record<string, string>;
    /**
     * Set of tasks numbers from where the workflow execution is started by this trigger. If this is empty, then workflow is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same workflow execution graph).
     */
    startTasks?: EnterpriseCrmEventbusProtoNextTask[];
    triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria;
    /**
     * The backend trigger ID.
     */
    triggerId?: string;
    /**
     * Required. A number to uniquely identify each trigger config within the workflow on UI.
     */
    triggerNumber?: string;
    triggerType?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
}
