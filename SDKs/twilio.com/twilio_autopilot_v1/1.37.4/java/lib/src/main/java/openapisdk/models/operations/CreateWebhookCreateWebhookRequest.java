package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookCreateWebhookRequest {
    @SpeakeasyMetadata("form:name=Events")
    public String events;
    public CreateWebhookCreateWebhookRequest withEvents(String events) {
        this.events = events;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateWebhookCreateWebhookRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookMethod")
    public String webhookMethod;
    public CreateWebhookCreateWebhookRequest withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public CreateWebhookCreateWebhookRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}