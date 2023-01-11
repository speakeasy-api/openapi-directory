package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookEventResourceRelationshipsTransactionData {
    @JsonProperty("id")
    public String id;
    public WebhookEventResourceRelationshipsTransactionData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookEventResourceRelationshipsTransactionData withType(String type) {
        this.type = type;
        return this;
    }
}