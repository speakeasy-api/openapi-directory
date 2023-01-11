package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsDisableBackupActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsDisableBackupActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsDisableBackupActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsDisableBackupActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}