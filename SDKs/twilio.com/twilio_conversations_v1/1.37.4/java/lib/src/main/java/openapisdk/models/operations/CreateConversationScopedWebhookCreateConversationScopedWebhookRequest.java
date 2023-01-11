package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ConversationScopedWebhookEnumMethodEnum configurationMethod;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationMethod(openapisdk.models.shared.ConversationScopedWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.ReplayAfter")
    public Long configurationReplayAfter;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationReplayAfter(Long configurationReplayAfter) {
        this.configurationReplayAfter = configurationReplayAfter;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public openapisdk.models.shared.ConversationScopedWebhookEnumTargetEnum target;
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest withTarget(openapisdk.models.shared.ConversationScopedWebhookEnumTargetEnum target) {
        this.target = target;
        return this;
    }
}