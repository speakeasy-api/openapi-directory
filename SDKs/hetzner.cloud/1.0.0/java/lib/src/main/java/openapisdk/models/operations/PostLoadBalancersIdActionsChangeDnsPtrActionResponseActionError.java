package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}