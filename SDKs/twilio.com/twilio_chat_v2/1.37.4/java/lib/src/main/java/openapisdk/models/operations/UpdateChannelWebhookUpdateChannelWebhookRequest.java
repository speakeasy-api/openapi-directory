package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelWebhookUpdateChannelWebhookRequest {
    @SpeakeasyMetadata("form:name=Configuration.Filters")
    public String[] configurationFilters;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationFilters(String[] configurationFilters) {
        this.configurationFilters = configurationFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.FlowSid")
    public String configurationFlowSid;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationFlowSid(String configurationFlowSid) {
        this.configurationFlowSid = configurationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Method")
    public openapisdk.models.shared.ChannelWebhookEnumMethodEnum configurationMethod;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationMethod(openapisdk.models.shared.ChannelWebhookEnumMethodEnum configurationMethod) {
        this.configurationMethod = configurationMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.RetryCount")
    public Long configurationRetryCount;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationRetryCount(Long configurationRetryCount) {
        this.configurationRetryCount = configurationRetryCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Triggers")
    public String[] configurationTriggers;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationTriggers(String[] configurationTriggers) {
        this.configurationTriggers = configurationTriggers;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration.Url")
    public String configurationUrl;
    public UpdateChannelWebhookUpdateChannelWebhookRequest withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
}