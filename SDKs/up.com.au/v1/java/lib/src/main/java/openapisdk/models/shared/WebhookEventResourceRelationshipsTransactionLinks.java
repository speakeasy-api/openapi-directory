package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookEventResourceRelationshipsTransactionLinks {
    @JsonProperty("related")
    public String related;
    public WebhookEventResourceRelationshipsTransactionLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}