package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}