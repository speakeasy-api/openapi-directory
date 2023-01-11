package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersCreateServerResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersCreateServerResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersCreateServerResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}