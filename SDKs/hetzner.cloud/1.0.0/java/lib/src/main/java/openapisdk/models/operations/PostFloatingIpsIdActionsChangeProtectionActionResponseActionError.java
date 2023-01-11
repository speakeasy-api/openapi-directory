package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIpsIdActionsChangeProtectionActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFloatingIpsIdActionsChangeProtectionActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}