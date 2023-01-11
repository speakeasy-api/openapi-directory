package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumesIdActionsDetachActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostVolumesIdActionsDetachActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostVolumesIdActionsDetachActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostVolumesIdActionsDetachActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}