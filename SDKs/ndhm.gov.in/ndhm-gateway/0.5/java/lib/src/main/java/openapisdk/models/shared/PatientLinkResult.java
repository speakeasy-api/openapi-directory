package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatientLinkResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public PatientLinkResult withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public PatientLinkResultPatient patient;
    public PatientLinkResult withPatient(PatientLinkResultPatient patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PatientLinkResult withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("resp")
    public RequestReference resp;
    public PatientLinkResult withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public PatientLinkResult withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}