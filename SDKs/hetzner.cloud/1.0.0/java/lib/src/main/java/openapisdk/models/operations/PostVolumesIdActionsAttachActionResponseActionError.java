package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumesIdActionsAttachActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostVolumesIdActionsAttachActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostVolumesIdActionsAttachActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostVolumesIdActionsAttachActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}