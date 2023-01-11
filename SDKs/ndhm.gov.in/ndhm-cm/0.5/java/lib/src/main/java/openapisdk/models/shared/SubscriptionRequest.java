package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SubscriptionRequest {
    @JsonProperty("requestId")
    public String requestId;
    public SubscriptionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("subscription")
    public SubscriptionRequestSubscription subscription;
    public SubscriptionRequest withSubscription(SubscriptionRequestSubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public SubscriptionRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}