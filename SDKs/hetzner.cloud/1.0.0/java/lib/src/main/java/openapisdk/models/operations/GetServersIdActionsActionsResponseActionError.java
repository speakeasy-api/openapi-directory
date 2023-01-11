package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetServersIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetServersIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetServersIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}