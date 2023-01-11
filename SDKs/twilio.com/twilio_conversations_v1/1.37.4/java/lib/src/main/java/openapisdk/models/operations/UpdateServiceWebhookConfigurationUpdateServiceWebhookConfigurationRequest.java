package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest {
    @SpeakeasyMetadata("form:name=Filters")
    public String[] filters;
    public UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Method")
    public String method;
    public UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostWebhookUrl")
    public String postWebhookUrl;
    public UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest withPostWebhookUrl(String postWebhookUrl) {
        this.postWebhookUrl = postWebhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=PreWebhookUrl")
    public String preWebhookUrl;
    public UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest withPreWebhookUrl(String preWebhookUrl) {
        this.preWebhookUrl = preWebhookUrl;
        return this;
    }
}