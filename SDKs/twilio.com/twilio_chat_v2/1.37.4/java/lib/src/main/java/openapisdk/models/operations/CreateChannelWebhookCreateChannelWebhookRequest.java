package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelWebhookCreateChannelWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ChannelWebhookEnumMethodEnum configurationMethod;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationMethod(openapisdk.models.shared.ChannelWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.RetryCount")
    public Long configurationRetryCount;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationRetryCount(Long configurationRetryCount) {
        this.configurationRetryCount = configurationRetryCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public CreateChannelWebhookCreateChannelWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ChannelWebhookEnumTypeEnum type;
    public CreateChannelWebhookCreateChannelWebhookRequest withType(openapisdk.models.shared.ChannelWebhookEnumTypeEnum type) {
        this.type = type;
        return this;
    }
}