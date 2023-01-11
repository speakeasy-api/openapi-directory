package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsEnableRescue201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsEnableRescue201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsEnableRescue201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsEnableRescue201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}