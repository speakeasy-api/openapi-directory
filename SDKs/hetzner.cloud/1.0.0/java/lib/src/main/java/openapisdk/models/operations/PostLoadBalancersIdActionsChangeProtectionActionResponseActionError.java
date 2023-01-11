package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsChangeProtectionActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsChangeProtectionActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}