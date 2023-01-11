package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatientAuthNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth")
    public PatientAuthNotificationAuth auth;
    public PatientAuthNotification withAuth(PatientAuthNotificationAuth auth) {
        this.auth = auth;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PatientAuthNotification withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public PatientAuthNotification withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}