package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworksIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetNetworksIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetNetworksIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetNetworksIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}