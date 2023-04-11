import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCloudSchedulerConfig } from "./googlecloudintegrationsv1alphacloudschedulerconfig";
import { GoogleCloudIntegrationsV1alphaCoordinate } from "./googlecloudintegrationsv1alphacoordinate";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig } from "./googlecloudintegrationsv1alphaintegrationalertconfig";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
/**
 * Optional. Dictates how next tasks will be executed.
 */
export declare enum GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
/**
 * Optional. Type of trigger
 */
export declare enum GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum {
    TriggerTypeUnspecified = "TRIGGER_TYPE_UNSPECIFIED",
    Cron = "CRON",
    Api = "API",
    SfdcChannel = "SFDC_CHANNEL",
    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL",
    SfdcCdcChannel = "SFDC_CDC_CHANNEL",
    CloudScheduler = "CLOUD_SCHEDULER"
}
/**
 * Configuration detail of a trigger.
 */
export declare class GoogleCloudIntegrationsV1alphaTriggerConfig extends SpeakeasyBase {
    /**
     * Optional. An alert threshold configuration for the [trigger + client + integration] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + integration] when published.
     */
    alertConfig?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig[];
    /**
     * Cloud Scheduler Trigger configuration
     */
    cloudSchedulerConfig?: GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;
    /**
     * Optional. User-provided description intended to give additional business context about the task.
     */
    description?: string;
    /**
     * Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string;
    /**
     * Optional. The user created label for a particular trigger.
     */
    label?: string;
    /**
     * Optional. Dictates how next tasks will be executed.
     */
    nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;
    /**
     * Configuration detail of coordinate, it used for UI
     */
    position?: GoogleCloudIntegrationsV1alphaCoordinate;
    /**
     * Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Pub/sub triggers.
     */
    properties?: Record<string, string>;
    /**
     * Optional. Set of tasks numbers from where the integration execution is started by this trigger. If this is empty, then integration is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same integration execution graph).
     */
    startTasks?: GoogleCloudIntegrationsV1alphaNextTask[];
    /**
     * Optional. The backend trigger ID.
     */
    triggerId?: string;
    /**
     * Required. A number to uniquely identify each trigger config within the integration on UI.
     */
    triggerNumber?: string;
    /**
     * Optional. Type of trigger
     */
    triggerType?: GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
}
