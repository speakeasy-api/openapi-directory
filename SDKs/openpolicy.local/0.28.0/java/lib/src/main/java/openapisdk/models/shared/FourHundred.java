package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FourHundred {
    @JsonProperty("code")
    public String code;
    public FourHundred withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Object[] errors;
    public FourHundred withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public FourHundred withMessage(String message) {
        this.message = message;
        return this;
    }
}