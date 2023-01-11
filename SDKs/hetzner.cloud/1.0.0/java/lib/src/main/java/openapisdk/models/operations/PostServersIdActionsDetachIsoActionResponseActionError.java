package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsDetachIsoActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsDetachIsoActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsDetachIsoActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsDetachIsoActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}