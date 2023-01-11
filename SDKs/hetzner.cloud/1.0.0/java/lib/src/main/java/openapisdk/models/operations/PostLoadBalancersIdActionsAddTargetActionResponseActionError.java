package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsAddTargetActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsAddTargetActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsAddTargetActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsAddTargetActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}