package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIpsIdActionsAssignActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFloatingIpsIdActionsAssignActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFloatingIpsIdActionsAssignActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFloatingIpsIdActionsAssignActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}