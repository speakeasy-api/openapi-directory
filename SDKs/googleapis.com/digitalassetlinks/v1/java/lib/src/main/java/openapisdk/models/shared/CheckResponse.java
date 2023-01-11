package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckResponse
 * Response message for the CheckAssetLinks call.
**/
public class CheckResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugString")
    public String debugString;
    public CheckResponse withDebugString(String debugString) {
        this.debugString = debugString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public CheckResponseErrorCodeEnum[] errorCode;
    public CheckResponse withErrorCode(CheckResponseErrorCodeEnum[] errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linked")
    public Boolean linked;
    public CheckResponse withLinked(Boolean linked) {
        this.linked = linked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAge")
    public String maxAge;
    public CheckResponse withMaxAge(String maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}