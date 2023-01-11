package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ConversationScopedWebhookEnumMethodEnum configurationMethod;
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest withConfigurationMethod(openapisdk.models.shared.ConversationScopedWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
}