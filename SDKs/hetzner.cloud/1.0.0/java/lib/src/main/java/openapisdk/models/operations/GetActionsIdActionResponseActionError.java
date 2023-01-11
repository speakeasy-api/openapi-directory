package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetActionsIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetActionsIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetActionsIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetActionsIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}