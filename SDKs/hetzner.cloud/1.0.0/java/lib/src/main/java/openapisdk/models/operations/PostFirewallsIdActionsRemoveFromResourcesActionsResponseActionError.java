package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}