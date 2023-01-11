package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FlexV1Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public FlexV1Configuration withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Object attributes;
    public FlexV1Configuration withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_recording_enabled")
    public Boolean callRecordingEnabled;
    public FlexV1Configuration withCallRecordingEnabled(Boolean callRecordingEnabled) {
        this.callRecordingEnabled = callRecordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_recording_webhook_url")
    public String callRecordingWebhookUrl;
    public FlexV1Configuration withCallRecordingWebhookUrl(String callRecordingWebhookUrl) {
        this.callRecordingWebhookUrl = callRecordingWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_configs")
    public Object[] channelConfigs;
    public FlexV1Configuration withChannelConfigs(Object[] channelConfigs) {
        this.channelConfigs = channelConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_instance_sid")
    public String chatServiceInstanceSid;
    public FlexV1Configuration withChatServiceInstanceSid(String chatServiceInstanceSid) {
        this.chatServiceInstanceSid = chatServiceInstanceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crm_attributes")
    public Object crmAttributes;
    public FlexV1Configuration withCrmAttributes(Object crmAttributes) {
        this.crmAttributes = crmAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crm_callback_url")
    public String crmCallbackUrl;
    public FlexV1Configuration withCrmCallbackUrl(String crmCallbackUrl) {
        this.crmCallbackUrl = crmCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crm_enabled")
    public Boolean crmEnabled;
    public FlexV1Configuration withCrmEnabled(Boolean crmEnabled) {
        this.crmEnabled = crmEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crm_fallback_url")
    public String crmFallbackUrl;
    public FlexV1Configuration withCrmFallbackUrl(String crmFallbackUrl) {
        this.crmFallbackUrl = crmFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crm_type")
    public String crmType;
    public FlexV1Configuration withCrmType(String crmType) {
        this.crmType = crmType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public FlexV1Configuration withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public FlexV1Configuration withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugger_integration")
    public Object debuggerIntegration;
    public FlexV1Configuration withDebuggerIntegration(Object debuggerIntegration) {
        this.debuggerIntegration = debuggerIntegration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_insights_drilldown")
    public Boolean flexInsightsDrilldown;
    public FlexV1Configuration withFlexInsightsDrilldown(Boolean flexInsightsDrilldown) {
        this.flexInsightsDrilldown = flexInsightsDrilldown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_insights_hr")
    public Object flexInsightsHr;
    public FlexV1Configuration withFlexInsightsHr(Object flexInsightsHr) {
        this.flexInsightsHr = flexInsightsHr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_service_instance_sid")
    public String flexServiceInstanceSid;
    public FlexV1Configuration withFlexServiceInstanceSid(String flexServiceInstanceSid) {
        this.flexServiceInstanceSid = flexServiceInstanceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_ui_status_report")
    public Object flexUiStatusReport;
    public FlexV1Configuration withFlexUiStatusReport(Object flexUiStatusReport) {
        this.flexUiStatusReport = flexUiStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_url")
    public String flexUrl;
    public FlexV1Configuration withFlexUrl(String flexUrl) {
        this.flexUrl = flexUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrations")
    public Object[] integrations;
    public FlexV1Configuration withIntegrations(Object[] integrations) {
        this.integrations = integrations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markdown")
    public Object markdown;
    public FlexV1Configuration withMarkdown(Object markdown) {
        this.markdown = markdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_instance_sid")
    public String messagingServiceInstanceSid;
    public FlexV1Configuration withMessagingServiceInstanceSid(String messagingServiceInstanceSid) {
        this.messagingServiceInstanceSid = messagingServiceInstanceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Object notifications;
    public FlexV1Configuration withNotifications(Object notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_call_flows")
    public Object outboundCallFlows;
    public FlexV1Configuration withOutboundCallFlows(Object outboundCallFlows) {
        this.outboundCallFlows = outboundCallFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plugin_service_attributes")
    public Object pluginServiceAttributes;
    public FlexV1Configuration withPluginServiceAttributes(Object pluginServiceAttributes) {
        this.pluginServiceAttributes = pluginServiceAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plugin_service_enabled")
    public Boolean pluginServiceEnabled;
    public FlexV1Configuration withPluginServiceEnabled(Boolean pluginServiceEnabled) {
        this.pluginServiceEnabled = pluginServiceEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_attributes")
    public Object publicAttributes;
    public FlexV1Configuration withPublicAttributes(Object publicAttributes) {
        this.publicAttributes = publicAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queue_stats_configuration")
    public Object queueStatsConfiguration;
    public FlexV1Configuration withQueueStatsConfiguration(Object queueStatsConfiguration) {
        this.queueStatsConfiguration = queueStatsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime_domain")
    public String runtimeDomain;
    public FlexV1Configuration withRuntimeDomain(String runtimeDomain) {
        this.runtimeDomain = runtimeDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverless_service_sids")
    public String[] serverlessServiceSids;
    public FlexV1Configuration withServerlessServiceSids(String[] serverlessServiceSids) {
        this.serverlessServiceSids = serverlessServiceSids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_version")
    public String serviceVersion;
    public FlexV1Configuration withServiceVersion(String serviceVersion) {
        this.serviceVersion = serviceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConfigurationEnumStatusEnum status;
    public FlexV1Configuration withStatus(ConfigurationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_offline_activity_sid")
    public String taskrouterOfflineActivitySid;
    public FlexV1Configuration withTaskrouterOfflineActivitySid(String taskrouterOfflineActivitySid) {
        this.taskrouterOfflineActivitySid = taskrouterOfflineActivitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_skills")
    public Object[] taskrouterSkills;
    public FlexV1Configuration withTaskrouterSkills(Object[] taskrouterSkills) {
        this.taskrouterSkills = taskrouterSkills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_target_taskqueue_sid")
    public String taskrouterTargetTaskqueueSid;
    public FlexV1Configuration withTaskrouterTargetTaskqueueSid(String taskrouterTargetTaskqueueSid) {
        this.taskrouterTargetTaskqueueSid = taskrouterTargetTaskqueueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_target_workflow_sid")
    public String taskrouterTargetWorkflowSid;
    public FlexV1Configuration withTaskrouterTargetWorkflowSid(String taskrouterTargetWorkflowSid) {
        this.taskrouterTargetWorkflowSid = taskrouterTargetWorkflowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_taskqueues")
    public Object[] taskrouterTaskqueues;
    public FlexV1Configuration withTaskrouterTaskqueues(Object[] taskrouterTaskqueues) {
        this.taskrouterTaskqueues = taskrouterTaskqueues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_worker_attributes")
    public Object taskrouterWorkerAttributes;
    public FlexV1Configuration withTaskrouterWorkerAttributes(Object taskrouterWorkerAttributes) {
        this.taskrouterWorkerAttributes = taskrouterWorkerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_worker_channels")
    public Object taskrouterWorkerChannels;
    public FlexV1Configuration withTaskrouterWorkerChannels(Object taskrouterWorkerChannels) {
        this.taskrouterWorkerChannels = taskrouterWorkerChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskrouter_workspace_sid")
    public String taskrouterWorkspaceSid;
    public FlexV1Configuration withTaskrouterWorkspaceSid(String taskrouterWorkspaceSid) {
        this.taskrouterWorkspaceSid = taskrouterWorkspaceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ui_attributes")
    public Object uiAttributes;
    public FlexV1Configuration withUiAttributes(Object uiAttributes) {
        this.uiAttributes = uiAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ui_dependencies")
    public Object uiDependencies;
    public FlexV1Configuration withUiDependencies(Object uiDependencies) {
        this.uiDependencies = uiDependencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ui_language")
    public String uiLanguage;
    public FlexV1Configuration withUiLanguage(String uiLanguage) {
        this.uiLanguage = uiLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ui_version")
    public String uiVersion;
    public FlexV1Configuration withUiVersion(String uiVersion) {
        this.uiVersion = uiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1Configuration withUrl(String url) {
        this.url = url;
        return this;
    }
}