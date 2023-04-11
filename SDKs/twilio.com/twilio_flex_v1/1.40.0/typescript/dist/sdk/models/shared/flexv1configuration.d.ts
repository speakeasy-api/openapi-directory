import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEnumStatusEnum } from "./configurationenumstatusenum";
/**
 * OK
 */
export declare class FlexV1Configuration extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Configuration resource.
     */
    accountSid?: string;
    /**
     * An object that contains application-specific data.
     */
    attributes?: any;
    /**
     * Whether call recording is enabled.
     */
    callRecordingEnabled?: boolean;
    /**
     * The call recording webhook URL.
     */
    callRecordingWebhookUrl?: string;
    /**
     * Settings for different limits for Flex Conversations channels attachments.
     */
    channelConfigs?: any[];
    /**
     * The SID of the chat service this user belongs to.
     */
    chatServiceInstanceSid?: string;
    /**
     * An object that contains the CRM attributes.
     */
    crmAttributes?: any;
    /**
     * The CRM Callback URL.
     */
    crmCallbackUrl?: string;
    /**
     * Whether CRM is present for Flex.
     */
    crmEnabled?: boolean;
    /**
     * The CRM Fallback URL.
     */
    crmFallbackUrl?: string;
    /**
     * The CRM type.
     */
    crmType?: string;
    /**
     * The date and time in GMT when the Configuration resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Configuration resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * Configurable parameters for Debugger Integration.
     */
    debuggerIntegration?: any;
    /**
     * Setting this to true will redirect Flex UI to the URL set in flex_url
     */
    flexInsightsDrilldown?: boolean;
    /**
     * Object with enabled/disabled flag with list of workspaces.
     */
    flexInsightsHr?: any;
    /**
     * The SID of the Flex service instance.
     */
    flexServiceInstanceSid?: string;
    /**
     * Configurable parameters for Flex UI Status report.
     */
    flexUiStatusReport?: any;
    /**
     * URL to redirect to in case drilldown is enabled.
     */
    flexUrl?: string;
    /**
     * A list of objects that contain the configurations for the Integrations supported in this configuration.
     */
    integrations?: any[];
    /**
     * Configurable parameters for Markdown.
     */
    markdown?: any;
    /**
     * The SID of the Messaging service instance.
     */
    messagingServiceInstanceSid?: string;
    /**
     * Configurable parameters for Notifications.
     */
    notifications?: any;
    /**
     * The list of outbound call flows.
     */
    outboundCallFlows?: any;
    /**
     * The plugin service attributes.
     */
    pluginServiceAttributes?: any;
    /**
     * Whether the plugin service enabled.
     */
    pluginServiceEnabled?: boolean;
    /**
     * The list of public attributes, which are visible to unauthenticated clients.
     */
    publicAttributes?: any;
    /**
     * Configurable parameters for Queues Statistics.
     */
    queueStatsConfiguration?: any;
    /**
     * The URL where the Flex instance is hosted.
     */
    runtimeDomain?: string;
    /**
     * The list of serverless service SIDs.
     */
    serverlessServiceSids?: string[];
    /**
     * The Flex Service version.
     */
    serviceVersion?: string;
    status?: ConfigurationEnumStatusEnum;
    /**
     * The TaskRouter SID of the offline activity.
     */
    taskrouterOfflineActivitySid?: string;
    /**
     * The Skill description for TaskRouter workers.
     */
    taskrouterSkills?: any[];
    /**
     * The SID of the TaskRouter Target TaskQueue.
     */
    taskrouterTargetTaskqueueSid?: string;
    /**
     * The SID of the TaskRouter target Workflow.
     */
    taskrouterTargetWorkflowSid?: string;
    /**
     * The list of TaskRouter TaskQueues.
     */
    taskrouterTaskqueues?: any[];
    /**
     * The TaskRouter Worker attributes.
     */
    taskrouterWorkerAttributes?: any;
    /**
     * The TaskRouter default channel capacities and availability for workers.
     */
    taskrouterWorkerChannels?: any;
    /**
     * The SID of the TaskRouter Workspace.
     */
    taskrouterWorkspaceSid?: string;
    /**
     * The object that describes Flex UI characteristics and settings.
     */
    uiAttributes?: any;
    /**
     * The object that defines the NPM packages and versions to be used in Hosted Flex.
     */
    uiDependencies?: any;
    /**
     * The primary language of the Flex UI.
     */
    uiLanguage?: string;
    /**
     * The Pinned UI version.
     */
    uiVersion?: string;
    /**
     * The absolute URL of the Configuration resource.
     */
    url?: string;
}
