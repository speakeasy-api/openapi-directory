package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListWebhooksResponse
 * Successful response to get all webhooks. This returns a paginated list of
 * webhooks, which can be scrolled by following the `prev` and `next` links
 * if present.
 * 
**/
public class ListWebhooksResponse {
    @JsonProperty("data")
    public WebhookResource[] data;
    public ListWebhooksResponse withData(WebhookResource[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public ListWebhooksResponseLinks links;
    public ListWebhooksResponse withLinks(ListWebhooksResponseLinks links) {
        this.links = links;
        return this;
    }
}