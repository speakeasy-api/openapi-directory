package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ControlErrorResponse
 * Error
**/
public class ControlErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_text")
    public String errorText;
    public ControlErrorResponse withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ControlErrorResponseStatusEnum status;
    public ControlErrorResponse withStatus(ControlErrorResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}