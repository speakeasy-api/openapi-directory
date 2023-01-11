package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyUsabilityResponseSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;
    public KeyUsabilityResponseSchema withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public KeyUsabilityResponseSchema withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public KeyUsabilityResult result;
    public KeyUsabilityResponseSchema withResult(KeyUsabilityResult result) {
        this.result = result;
        return this;
    }
}