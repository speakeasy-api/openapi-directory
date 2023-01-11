package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ServiceConversationScopedWebhookEnumMethodEnum configurationMethod;
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest withConfigurationMethod(openapisdk.models.shared.ServiceConversationScopedWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
}