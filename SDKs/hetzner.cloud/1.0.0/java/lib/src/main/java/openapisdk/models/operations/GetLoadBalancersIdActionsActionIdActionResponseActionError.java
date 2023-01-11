package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetLoadBalancersIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetLoadBalancersIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetLoadBalancersIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}