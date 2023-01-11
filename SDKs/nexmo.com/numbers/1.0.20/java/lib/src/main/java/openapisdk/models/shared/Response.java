package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Response {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code")
    public String errorCode;
    public Response withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code-label")
    public String errorCodeLabel;
    public Response withErrorCodeLabel(String errorCodeLabel) {
        this.errorCodeLabel = errorCodeLabel;
        return this;
    }
}