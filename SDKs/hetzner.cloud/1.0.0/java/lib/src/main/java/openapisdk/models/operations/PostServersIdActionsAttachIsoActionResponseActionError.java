package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsAttachIsoActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsAttachIsoActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsAttachIsoActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsAttachIsoActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}