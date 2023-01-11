package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}