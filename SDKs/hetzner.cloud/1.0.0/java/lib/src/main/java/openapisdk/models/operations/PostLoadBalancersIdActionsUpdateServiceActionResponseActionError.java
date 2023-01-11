package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsUpdateServiceActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsUpdateServiceActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}