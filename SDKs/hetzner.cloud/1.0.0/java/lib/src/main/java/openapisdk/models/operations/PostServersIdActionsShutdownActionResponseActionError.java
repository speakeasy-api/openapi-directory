package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsShutdownActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsShutdownActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsShutdownActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsShutdownActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}