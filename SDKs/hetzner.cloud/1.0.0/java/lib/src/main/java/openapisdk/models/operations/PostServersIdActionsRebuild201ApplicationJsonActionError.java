package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsRebuild201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsRebuild201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsRebuild201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsRebuild201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}