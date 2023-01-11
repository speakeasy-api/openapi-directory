package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookDeliveryLogResourceAttributesResponse
 * Information about the response that was received from the webhook URL.
 * 
**/
public class WebhookDeliveryLogResourceAttributesResponse {
    @JsonProperty("body")
    public String body;
    public WebhookDeliveryLogResourceAttributesResponse withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("statusCode")
    public Long statusCode;
    public WebhookDeliveryLogResourceAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}