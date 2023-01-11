package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookUpdateWebhookRequest {
    @SpeakeasyMetadata("form:name=Events")
    public String events;
    public UpdateWebhookUpdateWebhookRequest withEvents(String events) {
        this.events = events;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateWebhookUpdateWebhookRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookMethod")
    public String webhookMethod;
    public UpdateWebhookUpdateWebhookRequest withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public UpdateWebhookUpdateWebhookRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}