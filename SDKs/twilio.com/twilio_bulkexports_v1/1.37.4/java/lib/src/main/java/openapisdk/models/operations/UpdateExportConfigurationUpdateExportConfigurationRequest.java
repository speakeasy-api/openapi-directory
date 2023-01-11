package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExportConfigurationUpdateExportConfigurationRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateExportConfigurationUpdateExportConfigurationRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookMethod")
    public String webhookMethod;
    public UpdateExportConfigurationUpdateExportConfigurationRequest withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public UpdateExportConfigurationUpdateExportConfigurationRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}