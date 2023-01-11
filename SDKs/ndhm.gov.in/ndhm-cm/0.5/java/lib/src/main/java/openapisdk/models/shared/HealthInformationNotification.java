package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HealthInformationNotification {
    @JsonProperty("notification")
    public HealthInformationNotificationNotification notification;
    public HealthInformationNotification withNotification(HealthInformationNotificationNotification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public HealthInformationNotification withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HealthInformationNotification withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}