package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatientLinkReferenceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public PatientLinkReferenceResult withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public PatientLinkReferenceResultLink link;
    public PatientLinkReferenceResult withLink(PatientLinkReferenceResultLink link) {
        this.link = link;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PatientLinkReferenceResult withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("resp")
    public RequestReference resp;
    public PatientLinkReferenceResult withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public PatientLinkReferenceResult withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public PatientLinkReferenceResult withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}