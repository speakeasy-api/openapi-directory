package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookEventResourceRelationshipsWebhookLinks {
    @JsonProperty("related")
    public String related;
    public WebhookEventResourceRelationshipsWebhookLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}