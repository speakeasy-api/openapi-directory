package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostcodeToAddressResponseSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;
    public PostcodeToAddressResponseSchema withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostcodeToAddressResponseSchema withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Address[] result;
    public PostcodeToAddressResponseSchema withResult(Address[] result) {
        this.result = result;
        return this;
    }
}