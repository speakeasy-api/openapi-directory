package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorResponse
 * Error response returned by all error conditions in Velo Services
**/
public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correlationId")
    public String correlationId;
    public ErrorResponse withCorrelationId(String correlationId) {
        this.correlationId = correlationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public ErrorResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatusCode")
    public Long httpStatusCode;
    public ErrorResponse withHttpStatusCode(Long httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
        return this;
    }
}