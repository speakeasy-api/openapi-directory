package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Problem {
    @JsonProperty("code")
    public String code;
    public Problem withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Problem withMessage(String message) {
        this.message = message;
        return this;
    }
}