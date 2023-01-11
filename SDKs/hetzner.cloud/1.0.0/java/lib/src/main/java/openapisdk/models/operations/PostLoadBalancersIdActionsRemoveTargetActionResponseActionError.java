package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsRemoveTargetActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsRemoveTargetActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}