package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuSubscriptionRequestReceiptSubscriptionRequest {
    @JsonProperty("id")
    public String id;
    public HiuSubscriptionRequestReceiptSubscriptionRequest withId(String id) {
        this.id = id;
        return this;
    }
}