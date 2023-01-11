package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}