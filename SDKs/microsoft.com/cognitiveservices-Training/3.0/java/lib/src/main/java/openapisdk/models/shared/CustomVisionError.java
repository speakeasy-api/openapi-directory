package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomVisionError {
    @JsonProperty("code")
    public CustomVisionErrorCodeEnum code;
    public CustomVisionError withCode(CustomVisionErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public CustomVisionError withMessage(String message) {
        this.message = message;
        return this;
    }
}