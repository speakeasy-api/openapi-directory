package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ServiceConversationScopedWebhookEnumMethodEnum configurationMethod;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationMethod(openapisdk.models.shared.ServiceConversationScopedWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.ReplayAfter")
    public Long configurationReplayAfter;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationReplayAfter(Long configurationReplayAfter) {
        this.configurationReplayAfter = configurationReplayAfter;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public openapisdk.models.shared.ServiceConversationScopedWebhookEnumTargetEnum target;
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest withTarget(openapisdk.models.shared.ServiceConversationScopedWebhookEnumTargetEnum target) {
        this.target = target;
        return this;
    }
}