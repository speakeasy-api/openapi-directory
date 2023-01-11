package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuotaError
 * Represents error information for QuotaOperation.
**/
public class QuotaError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public QuotaErrorCodeEnum code;
    public QuotaError withCode(QuotaErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public QuotaError withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public QuotaError withStatus(Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public QuotaError withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}