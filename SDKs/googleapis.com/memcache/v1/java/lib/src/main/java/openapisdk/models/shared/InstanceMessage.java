package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstanceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public InstanceMessageCodeEnum code;
    public InstanceMessage withCode(InstanceMessageCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InstanceMessage withMessage(String message) {
        this.message = message;
        return this;
    }
}