package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HipHealthInformationRequest {
    @JsonProperty("hiRequest")
    public HipHealthInformationRequestHiRequest hiRequest;
    public HipHealthInformationRequest withHiRequest(HipHealthInformationRequestHiRequest hiRequest) {
        this.hiRequest = hiRequest;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public HipHealthInformationRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HipHealthInformationRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public HipHealthInformationRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}