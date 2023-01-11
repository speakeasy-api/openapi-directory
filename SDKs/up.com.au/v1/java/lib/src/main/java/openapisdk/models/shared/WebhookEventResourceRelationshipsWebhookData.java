package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookEventResourceRelationshipsWebhookData {
    @JsonProperty("id")
    public String id;
    public WebhookEventResourceRelationshipsWebhookData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookEventResourceRelationshipsWebhookData withType(String type) {
        this.type = type;
        return this;
    }
}