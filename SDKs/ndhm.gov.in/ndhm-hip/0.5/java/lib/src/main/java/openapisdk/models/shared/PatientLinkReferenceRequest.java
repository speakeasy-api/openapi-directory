package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatientLinkReferenceRequest {
    @JsonProperty("patient")
    public PatientLinkReferenceRequestPatient patient;
    public PatientLinkReferenceRequest withPatient(PatientLinkReferenceRequestPatient patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PatientLinkReferenceRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public PatientLinkReferenceRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public PatientLinkReferenceRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}