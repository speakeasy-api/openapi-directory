package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest {
    @SpeakeasyMetadata("form:name=Filters")
    public String[] filters;
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("form:name=Method")
    public String method;
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostWebhookUrl")
    public String postWebhookUrl;
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest withPostWebhookUrl(String postWebhookUrl) {
        this.postWebhookUrl = postWebhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=PreWebhookUrl")
    public String preWebhookUrl;
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest withPreWebhookUrl(String preWebhookUrl) {
        this.preWebhookUrl = preWebhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public openapisdk.models.shared.ConfigurationWebhookEnumTargetEnum target;
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest withTarget(openapisdk.models.shared.ConfigurationWebhookEnumTargetEnum target) {
        this.target = target;
        return this;
    }
}