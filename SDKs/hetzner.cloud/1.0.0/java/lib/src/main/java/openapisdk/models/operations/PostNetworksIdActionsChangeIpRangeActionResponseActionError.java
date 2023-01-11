package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostNetworksIdActionsChangeIpRangeActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostNetworksIdActionsChangeIpRangeActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostNetworksIdActionsChangeIpRangeActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostNetworksIdActionsChangeIpRangeActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}