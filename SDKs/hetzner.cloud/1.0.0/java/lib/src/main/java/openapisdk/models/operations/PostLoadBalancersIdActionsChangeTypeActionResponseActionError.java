package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsChangeTypeActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsChangeTypeActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsChangeTypeActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsChangeTypeActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}