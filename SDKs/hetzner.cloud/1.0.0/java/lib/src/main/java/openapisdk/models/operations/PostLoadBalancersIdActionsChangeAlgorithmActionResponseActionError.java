package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}