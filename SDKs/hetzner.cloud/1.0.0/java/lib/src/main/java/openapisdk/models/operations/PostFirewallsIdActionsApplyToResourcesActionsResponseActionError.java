package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsApplyToResourcesActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFirewallsIdActionsApplyToResourcesActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}