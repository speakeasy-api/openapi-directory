package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}