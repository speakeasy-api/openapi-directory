package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookDeliveryLogResourceRelationships {
    @JsonProperty("webhookEvent")
    public WebhookDeliveryLogResourceRelationshipsWebhookEvent webhookEvent;
    public WebhookDeliveryLogResourceRelationships withWebhookEvent(WebhookDeliveryLogResourceRelationshipsWebhookEvent webhookEvent) {
        this.webhookEvent = webhookEvent;
        return this;
    }
}