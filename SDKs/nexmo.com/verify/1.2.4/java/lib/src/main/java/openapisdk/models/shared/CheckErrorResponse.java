package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckErrorResponse
 * Error
**/
public class CheckErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_text")
    public String errorText;
    public CheckErrorResponse withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CheckErrorResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CheckErrorResponseStatusEnum status;
    public CheckErrorResponse withStatus(CheckErrorResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}