package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookCreateWebhookRequest {
    @SpeakeasyMetadata("form:name=EventTypes")
    public String[] eventTypes;
    public CreateWebhookCreateWebhookRequest withEventTypes(String[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateWebhookCreateWebhookRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.WebhookEnumStatusEnum status;
    public CreateWebhookCreateWebhookRequest withStatus(openapisdk.models.shared.WebhookEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=Version")
    public openapisdk.models.shared.WebhookEnumVersionEnum version;
    public CreateWebhookCreateWebhookRequest withVersion(openapisdk.models.shared.WebhookEnumVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public CreateWebhookCreateWebhookRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}