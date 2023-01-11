package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsResetActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsResetActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsResetActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsResetActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}