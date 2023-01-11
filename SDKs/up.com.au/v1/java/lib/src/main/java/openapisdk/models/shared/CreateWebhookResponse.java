package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateWebhookResponse
 * Successful response after creating a webhook.
 * 
**/
public class CreateWebhookResponse {
    @JsonProperty("data")
    public WebhookResource data;
    public CreateWebhookResponse withData(WebhookResource data) {
        this.data = data;
        return this;
    }
}