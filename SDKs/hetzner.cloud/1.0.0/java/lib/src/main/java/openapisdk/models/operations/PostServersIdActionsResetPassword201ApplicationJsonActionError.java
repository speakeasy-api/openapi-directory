package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsResetPassword201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsResetPassword201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsResetPassword201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsResetPassword201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}