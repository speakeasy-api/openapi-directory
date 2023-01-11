package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostNetworksIdActionsDeleteSubnetActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostNetworksIdActionsDeleteSubnetActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostNetworksIdActionsDeleteSubnetActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostNetworksIdActionsDeleteSubnetActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}