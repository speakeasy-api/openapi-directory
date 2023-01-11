package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetLoadBalancersIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetLoadBalancersIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetLoadBalancersIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}