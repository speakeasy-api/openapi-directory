package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}