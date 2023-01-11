package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsDisableRescueActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsDisableRescueActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsDisableRescueActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsDisableRescueActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}