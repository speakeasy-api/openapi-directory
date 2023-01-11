package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsSetRulesActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostFirewallsIdActionsSetRulesActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostFirewallsIdActionsSetRulesActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostFirewallsIdActionsSetRulesActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}