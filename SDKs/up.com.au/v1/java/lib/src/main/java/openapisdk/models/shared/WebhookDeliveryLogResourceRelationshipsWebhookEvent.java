package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookDeliveryLogResourceRelationshipsWebhookEvent {
    @JsonProperty("data")
    public WebhookDeliveryLogResourceRelationshipsWebhookEventData data;
    public WebhookDeliveryLogResourceRelationshipsWebhookEvent withData(WebhookDeliveryLogResourceRelationshipsWebhookEventData data) {
        this.data = data;
        return this;
    }
}