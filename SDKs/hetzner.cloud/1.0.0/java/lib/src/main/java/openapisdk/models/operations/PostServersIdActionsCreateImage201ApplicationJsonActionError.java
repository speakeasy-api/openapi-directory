package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsCreateImage201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsCreateImage201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsCreateImage201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsCreateImage201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}