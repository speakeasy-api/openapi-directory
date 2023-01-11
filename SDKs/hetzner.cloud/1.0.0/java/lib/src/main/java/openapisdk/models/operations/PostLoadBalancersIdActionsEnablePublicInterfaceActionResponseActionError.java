package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}