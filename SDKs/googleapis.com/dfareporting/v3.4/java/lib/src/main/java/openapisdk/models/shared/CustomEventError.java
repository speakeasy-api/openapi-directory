package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventError
 * The error code and description for a custom event that failed to insert.
**/
public class CustomEventError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public CustomEventErrorCodeEnum code;
    public CustomEventError withCode(CustomEventErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventError withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CustomEventError withMessage(String message) {
        this.message = message;
        return this;
    }
}