package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatientAuthConfirmRequest {
    @JsonProperty("credential")
    public PatientAuthConfirmRequestCredential credential;
    public PatientAuthConfirmRequest withCredential(PatientAuthConfirmRequestCredential credential) {
        this.credential = credential;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PatientAuthConfirmRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public PatientAuthConfirmRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public PatientAuthConfirmRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}