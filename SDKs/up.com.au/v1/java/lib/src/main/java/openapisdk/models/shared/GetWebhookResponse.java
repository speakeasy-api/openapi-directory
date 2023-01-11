package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetWebhookResponse
 * Successful response to get a single webhook.
 * 
**/
public class GetWebhookResponse {
    @JsonProperty("data")
    public WebhookResource data;
    public GetWebhookResponse withData(WebhookResource data) {
        this.data = data;
        return this;
    }
}