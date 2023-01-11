package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookDeliveryLogResourceRelationshipsWebhookEventData {
    @JsonProperty("id")
    public String id;
    public WebhookDeliveryLogResourceRelationshipsWebhookEventData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookDeliveryLogResourceRelationshipsWebhookEventData withType(String type) {
        this.type = type;
        return this;
    }
}