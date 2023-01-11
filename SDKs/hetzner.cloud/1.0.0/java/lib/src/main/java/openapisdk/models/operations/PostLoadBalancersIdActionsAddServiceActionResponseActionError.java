package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsAddServiceActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsAddServiceActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsAddServiceActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsAddServiceActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}