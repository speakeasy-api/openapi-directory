package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeError
 * Message containing a runtime error config.
**/
public class RuntimeError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public RuntimeError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RuntimeError withMessage(String message) {
        this.message = message;
        return this;
    }
}