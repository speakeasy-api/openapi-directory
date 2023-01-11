package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostNetworksIdActionsAddRouteActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostNetworksIdActionsAddRouteActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostNetworksIdActionsAddRouteActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostNetworksIdActionsAddRouteActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}