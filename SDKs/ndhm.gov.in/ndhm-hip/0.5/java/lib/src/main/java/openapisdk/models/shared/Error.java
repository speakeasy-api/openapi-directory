package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Error {
    @JsonProperty("code")
    public Long code;
    public Error withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
}