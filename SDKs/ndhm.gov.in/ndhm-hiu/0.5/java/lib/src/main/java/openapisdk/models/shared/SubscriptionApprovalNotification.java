package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SubscriptionApprovalNotification {
    @JsonProperty("notification")
    public SubscriptionApprovalNotificationNotification notification;
    public SubscriptionApprovalNotification withNotification(SubscriptionApprovalNotificationNotification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public SubscriptionApprovalNotification withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public SubscriptionApprovalNotification withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}