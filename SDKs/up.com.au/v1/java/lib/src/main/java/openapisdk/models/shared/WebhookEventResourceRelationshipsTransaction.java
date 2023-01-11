package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookEventResourceRelationshipsTransaction {
    @JsonProperty("data")
    public WebhookEventResourceRelationshipsTransactionData data;
    public WebhookEventResourceRelationshipsTransaction withData(WebhookEventResourceRelationshipsTransactionData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public WebhookEventResourceRelationshipsTransactionLinks links;
    public WebhookEventResourceRelationshipsTransaction withLinks(WebhookEventResourceRelationshipsTransactionLinks links) {
        this.links = links;
        return this;
    }
}