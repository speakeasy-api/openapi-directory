package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookDeliveryLogResourceAttributesRequest
 * Information about the request that was sent to the webhook URL.
 * 
**/
public class WebhookDeliveryLogResourceAttributesRequest {
    @JsonProperty("body")
    public String body;
    public WebhookDeliveryLogResourceAttributesRequest withBody(String body) {
        this.body = body;
        return this;
    }
}