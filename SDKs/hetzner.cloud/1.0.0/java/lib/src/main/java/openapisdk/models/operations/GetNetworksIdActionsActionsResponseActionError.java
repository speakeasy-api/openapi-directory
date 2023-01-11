package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworksIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetNetworksIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetNetworksIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetNetworksIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}