package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsDetachFromNetworkActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsDetachFromNetworkActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsDetachFromNetworkActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsDetachFromNetworkActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}