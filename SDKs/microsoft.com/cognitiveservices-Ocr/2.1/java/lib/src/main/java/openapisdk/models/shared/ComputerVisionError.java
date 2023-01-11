package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputerVisionError
 * Details about the API request error.
**/
public class ComputerVisionError {
    @JsonProperty("code")
    public Object code;
    public ComputerVisionError withCode(Object code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ComputerVisionError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ComputerVisionError withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}