package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumes201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostVolumes201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostVolumes201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostVolumes201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}