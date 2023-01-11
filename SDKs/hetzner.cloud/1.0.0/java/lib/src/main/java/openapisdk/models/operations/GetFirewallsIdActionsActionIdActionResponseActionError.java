package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFirewallsIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetFirewallsIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetFirewallsIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetFirewallsIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}