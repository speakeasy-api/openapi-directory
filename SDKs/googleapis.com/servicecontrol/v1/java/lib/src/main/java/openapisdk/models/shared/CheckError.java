package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckError
 * Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.
**/
public class CheckError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public CheckErrorCodeEnum code;
    public CheckError withCode(CheckErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public CheckError withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public CheckError withStatus(Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public CheckError withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}