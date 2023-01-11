package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIpsIdActionsUnassignActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFloatingIpsIdActionsUnassignActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFloatingIpsIdActionsUnassignActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFloatingIpsIdActionsUnassignActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}