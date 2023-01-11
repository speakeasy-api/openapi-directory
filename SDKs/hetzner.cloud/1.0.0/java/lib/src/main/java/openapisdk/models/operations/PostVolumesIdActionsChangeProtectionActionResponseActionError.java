package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumesIdActionsChangeProtectionActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostVolumesIdActionsChangeProtectionActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostVolumesIdActionsChangeProtectionActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostVolumesIdActionsChangeProtectionActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}