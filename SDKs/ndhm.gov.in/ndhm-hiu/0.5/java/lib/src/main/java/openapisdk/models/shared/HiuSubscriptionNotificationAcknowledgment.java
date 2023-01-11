package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HiuSubscriptionNotificationAcknowledgment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgement")
    public HiuSubscriptionNotificationAcknowledgmentAcknowledgement acknowledgement;
    public HiuSubscriptionNotificationAcknowledgment withAcknowledgement(HiuSubscriptionNotificationAcknowledgmentAcknowledgement acknowledgement) {
        this.acknowledgement = acknowledgement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public HiuSubscriptionNotificationAcknowledgment withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public HiuSubscriptionNotificationAcknowledgment withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("resp")
    public RequestReference resp;
    public HiuSubscriptionNotificationAcknowledgment withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HiuSubscriptionNotificationAcknowledgment withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}