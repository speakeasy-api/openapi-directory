package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsChangeProtectionActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsChangeProtectionActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsChangeProtectionActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsChangeProtectionActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}