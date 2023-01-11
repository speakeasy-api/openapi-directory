package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancers201ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancers201ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancers201ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}