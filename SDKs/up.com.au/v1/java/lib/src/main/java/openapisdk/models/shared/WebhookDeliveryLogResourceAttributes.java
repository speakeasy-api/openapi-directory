package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WebhookDeliveryLogResourceAttributes {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public WebhookDeliveryLogResourceAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deliveryStatus")
    public Object deliveryStatus;
    public WebhookDeliveryLogResourceAttributes withDeliveryStatus(Object deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
        return this;
    }
    @JsonProperty("request")
    public WebhookDeliveryLogResourceAttributesRequest request;
    public WebhookDeliveryLogResourceAttributes withRequest(WebhookDeliveryLogResourceAttributesRequest request) {
        this.request = request;
        return this;
    }
    @JsonProperty("response")
    public WebhookDeliveryLogResourceAttributesResponse response;
    public WebhookDeliveryLogResourceAttributes withResponse(WebhookDeliveryLogResourceAttributesResponse response) {
        this.response = response;
        return this;
    }
}