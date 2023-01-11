package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostNetworksIdActionsDeleteRouteActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostNetworksIdActionsDeleteRouteActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostNetworksIdActionsDeleteRouteActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostNetworksIdActionsDeleteRouteActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}