package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConsentRequestStatusRequest {
    @JsonProperty("consentRequestId")
    public String consentRequestId;
    public ConsentRequestStatusRequest withConsentRequestId(String consentRequestId) {
        this.consentRequestId = consentRequestId;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public ConsentRequestStatusRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public ConsentRequestStatusRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}