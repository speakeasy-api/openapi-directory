package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumesIdActionsResizeActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostVolumesIdActionsResizeActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostVolumesIdActionsResizeActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostVolumesIdActionsResizeActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}