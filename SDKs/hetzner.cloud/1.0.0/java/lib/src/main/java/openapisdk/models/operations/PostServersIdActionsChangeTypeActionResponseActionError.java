package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsChangeTypeActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsChangeTypeActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsChangeTypeActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsChangeTypeActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}