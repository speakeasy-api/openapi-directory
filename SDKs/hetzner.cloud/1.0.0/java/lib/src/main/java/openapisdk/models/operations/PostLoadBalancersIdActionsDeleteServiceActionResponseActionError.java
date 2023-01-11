package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsDeleteServiceActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsDeleteServiceActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}