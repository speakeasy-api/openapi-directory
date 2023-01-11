package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetServersIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetServersIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetServersIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}