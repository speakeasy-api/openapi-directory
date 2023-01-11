package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsEnableBackupActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsEnableBackupActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsEnableBackupActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsEnableBackupActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}