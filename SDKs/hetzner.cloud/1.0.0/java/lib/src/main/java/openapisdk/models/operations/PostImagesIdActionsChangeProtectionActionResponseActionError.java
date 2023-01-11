package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostImagesIdActionsChangeProtectionActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostImagesIdActionsChangeProtectionActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostImagesIdActionsChangeProtectionActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostImagesIdActionsChangeProtectionActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}