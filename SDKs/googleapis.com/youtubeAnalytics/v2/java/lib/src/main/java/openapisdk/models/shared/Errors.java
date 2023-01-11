package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Errors
 * Request Error information. The presence of an error field signals that the operation has failed.
**/
public class Errors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ErrorsCodeEnum code;
    public Errors withCode(ErrorsCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ErrorProto[] error;
    public Errors withError(ErrorProto[] error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public Errors withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}