package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListWebhookDeliveryLogsResponse
 * Successful response to get all delivery logs for a webhook. This returns
 * a paginated list of delivery logs, which can be scrolled by following the
 * `next` and `prev` links if present.
 * 
**/
public class ListWebhookDeliveryLogsResponse {
    @JsonProperty("data")
    public WebhookDeliveryLogResource[] data;
    public ListWebhookDeliveryLogsResponse withData(WebhookDeliveryLogResource[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public ListWebhookDeliveryLogsResponseLinks links;
    public ListWebhookDeliveryLogsResponse withLinks(ListWebhookDeliveryLogsResponseLinks links) {
        this.links = links;
        return this;
    }
}