package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsAttachToNetworkActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsAttachToNetworkActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsAttachToNetworkActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsAttachToNetworkActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}