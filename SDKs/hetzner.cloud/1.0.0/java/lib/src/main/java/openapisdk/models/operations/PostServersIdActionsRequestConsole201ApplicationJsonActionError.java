package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsRequestConsole201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsRequestConsole201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsRequestConsole201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsRequestConsole201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}