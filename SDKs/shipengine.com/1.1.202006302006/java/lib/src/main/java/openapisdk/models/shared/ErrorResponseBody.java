package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorResponseBody
 * An error response body
**/
public class ErrorResponseBody {
    @JsonProperty("errors")
    public Error[] errors;
    public ErrorResponseBody withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public ErrorResponseBody withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}