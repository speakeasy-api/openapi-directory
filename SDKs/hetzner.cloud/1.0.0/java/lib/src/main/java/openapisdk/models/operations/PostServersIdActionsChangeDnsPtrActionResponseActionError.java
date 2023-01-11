package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsChangeDnsPtrActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsChangeDnsPtrActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsChangeDnsPtrActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsChangeDnsPtrActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}